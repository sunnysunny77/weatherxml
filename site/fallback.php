<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Offline</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="stylesheet" href="/css/app.min.css">
    <style>
        div {
            display: flex;
            flex-direction: column; 
            align-items: center;
            justify-content: center; 
            padding: 0 1.5rem;
            min-height: 100vh;
        }
        img {
            display: block;
            margin: 0 auto;
        }
        h1{
            text-align: center;
            font-size: 18px;
            font-weight: 500;  
        }
    </style>
</head>
<body>
    
    <div style="text-align: center;">

        <img width="192" height="192" src="/images/pwa-logo-small.webp" alt="app logo"/>

        <h1> Area not available offline.. Please wait to be redirected </h1>

    </div>

    <?php header( "refresh:3;url=/" ); ?>

</body>
</html>