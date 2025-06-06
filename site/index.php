<!DOCTYPE html>
<html lang="en" data-overlayscrollbars-initialize>
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
  <body data-overlayscrollbars-initialize>
    <header>
      <h1>        
        <?php
          date_default_timezone_set("Australia/Perth");
          echo  date("g:i a") . " &mdash; Perth";
        ?>
        <br>
        <br>
        <span class="y">Loading...</span>
      </h1>
    </header>
    <main>
      <section>
        <div class="u"> 
          <p class="z"></p>
          <h2 class="f"></h2>
          <img alt="day-1" src="./images/placeholder.webp" width="200" height="200" class="x" />
        </div> 
        <div class="u"> 
          <p class="z"></p>
          <h2 class="f"></h2>
          <img alt="day-2" src="./images/placeholder.webp" width="200" height="200" class="x" />
        </div> 
        <div class="u"> 
          <p class="z"></p>
          <h2 class="f"></h2>
          <img alt="day-3" src="./images/placeholder.webp" width="200" height="200" class="x" />
        </div> 
        <div class="u"> 
          <p class="z"></p>
          <h2 class="f"></h2>
          <img alt="day-4" src="./images/placeholder.webp" width="200" height="200" class="x" />
        </div> 
        <div class="u"> 
          <p class="z"></p>
          <h2 class="f"></h2>
          <img alt="day-5" src="./images/placeholder.webp" width="200" height="200" class="x" />
        </div> 
        <div class="u"> 
          <p class="z"></p>
          <h2 class="f"></h2>
          <img alt="day-6" src="./images/placeholder.webp" width="200" height="200" class="x" />
        </div> 
        <div class="u"> 
          <p class="z"></p>
          <h2 class="f"></h2>
          <img alt="day-7" src="./images/placeholder.webp" width="200" height="200" class="x" />
        </div> 
      </section>
    </main>
    <div role="img" id="image"></div>
    <footer>
      <p><i class="fa-regular fa-copyright" ></i>&nbsp;<?php echo date("Y"); ?></p>
    </footer>
    <script src="./js/app.min.js" defer></script>
  </body>
</html>
