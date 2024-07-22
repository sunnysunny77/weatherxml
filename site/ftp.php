<?php

    $ftp_username = "anonymous";
    $ftp_userpass = "guest";
    $url = "ftp.bom.gov.au";
    $local_file = "IDW12300.xml";
    $server_file = "/anon/gen/fwo/IDW12300.xml";
    $local_file0 = "IDW60920.xml";
    $server_file0 = "/anon/gen/fwo/IDW60920.xml";

    if (time()-filemtime($local_file0) > 60000 || time()-filemtime($local_file) > 60000 ) {

        $fp = fopen($local_file,"w");
        $fp0 = fopen($local_file0,"w");
        $ftp = ftp_connect($url);
        ftp_login($ftp, $ftp_username, $ftp_userpass );
        ftp_pasv($ftp, true) or die("Cannot switch to passive mode");
        ftp_fget($ftp, $fp0, $server_file0, FTP_BINARY, 0) && ftp_fget($ftp, $fp, $server_file, FTP_BINARY, 0);
        ftp_close($ftp);
        fclose($fp);
    }

?>