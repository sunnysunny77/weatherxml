<!DOCTYPE html>
<html lang="en">
  <head>
    <?php
      require_once "./ftp.php";
    ?>
    <script src="./js/preload.js"></script>
    <meta charset="utf-8" />
    <meta name="description" content="Weather in Perth" />
    <meta name="keywords" content="Perth, Bom, Forecast" />
    <meta name="author" content="D.C" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weather</title>
    <link href="./css/app.min.css" rel="stylesheet" type="text/css" />
    <link rel="manifest" href="manifest.json" />
    <link rel="apple-touch-icon" href="images/pwa-logo-small.webp" />
  </head>

  <body>
    <header>
      <h1>        
        <?php
          date_default_timezone_set("Australia/Perth");
          echo  date("g:i a") . " &mdash; Perth";
        ?>
        <span class="y"></span>
      </h1>
    </header>
    <main>
      <section id="flexb" class="bg1">
        <p class="z sticky bg1"></p>
        <h2 class="f"></h2>
        <img src="./images/placeholder.webp" width="200" height="200" class="x" />
        <p class="z sticky bg1"></p>
        <h2 class="f"></h2>
        <img src="./images/placeholder.webp" width="200" height="200" class="x" />
        <p class="z sticky bg1"></p>
        <h2 class="f"></h2>
        <img src="./images/placeholder.webp" width="200" height="200" class="x" />
        <p class="z sticky bg1"></p>
        <h2 class="f"></h2>
        <img src="./images/placeholder.webp" width="200" height="200" class="x" />
        <p class="z sticky bg1"></p>
        <h2 class="f"></h2>
        <img src="./images/placeholder.webp" width="200" height="200" class="x" />
        <p class="z sticky bg1"></p>
        <h2 class="f"></h2>
        <img src="./images/placeholder.webp" width="200" height="200" class="x" />
        <p class="z sticky bg1"></p>
        <h2 class="f"></h2>
        <img src="./images/placeholder.webp" width="200" height="200" class="x" />
      </section>
      <section id="sticky" class="sticky"></section>
    </main>
    <footer>
      <p><i class="fa-regular fa-copyright" ></i>&nbsp;<?php echo date("Y"); ?></p>
    </footer>
    <script src="./js/app.min.js" defer></script>
  </body>
</html>
