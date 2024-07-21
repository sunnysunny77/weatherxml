<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="Weather in Perth" />
    <meta name="keywords" content="Perth, Bom, Forecast" />
    <meta name="author" content="D.C" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weather</title>
    <link href="./css/app.min.css" rel="stylesheet" type="text/css" />
    <link rel="manifest" href="manifest.json" />
    <link rel="apple-touch-icon" href="images/pwa-logo-small.png" />
    <?php

      $ftp_username = "anonymous";
      $ftp_userpass = "guest";
      $url = "ftp.bom.gov.au";
      $local_file = "IDW12300.xml";
      $server_file = "/anon/gen/fwo/IDW12300.xml";
      $local_file0 = "IDW60920.xml";
      $server_file0 = "/anon/gen/fwo/IDW60920.xml";

      if (time()-filemtime($local_file0) > 0.5 * 3600 || time()-filemtime($local_file) > 0.5 * 3600 ) {
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
  </head>

  <body>
    <header>
      <h1>Weather</h1>
      <q>Perth BOM</q>
    </header>
    <nav>
      <ul>
        <li>
          <a target="bom" href="http://www.bom.gov.au/catalogue/anon-ftp.shtml"
            >BOM</a
          >
        </li>
      </ul>
    </nav>
    <main>
      <section id="flexb" class="bg1">
        <p class="z s bg1"></p>
        <h2 class="f"></h2>
        <img class="x" />
        <p class="z s bg1"></p>
        <h2 class="f"></h2>
        <img class="x" />
        <p class="z s bg1"></p>
        <h2 class="f"></h2>
        <img class="x" />
        <p class="z s bg1"></p>
        <h2 class="f"></h2>
        <img class="x" />
        <p class="z s bg1"></p>
        <h2 class="f"></h2>
        <img class="x" />
        <p class="z s bg1"></p>
        <h2 class="f"></h2>
        <img class="x" />
        <p class="z s bg1"></p>
        <h2 class="f"></h2>
        <img class="x" />
      </section>
      <section id="sticky" class="s"></section>
      <article>
        <h2>Article</h2>
        <p>
          The Bureau of Meteorology makes a number of real-time forecast,
          warning and observation products and analysis charts available freely
          via the web and FTP. The Bureau's Public Access Services encompass a
          wide range of free weather forecast, warning and information services,
          available to the general public on a 24 hour, seven days a week basis.
        </p>
      </article>
    </main>
    <footer>
      <ul>
        <li>D.C</li>
      </ul>
    </footer>
    <script src="./js/app.min.js" defer></script>
  </body>
</html>
