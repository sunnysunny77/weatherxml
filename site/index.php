<!DOCTYPE html>
<html lang="en">
  <head>
    <?php
      require_once "./ftp.php";
    ?>
    <meta charset="utf-8" />
    <meta name="description" content="Weather in Perth" />
    <meta name="keywords" content="Perth, Bom, Forecast" />
    <meta name="author" content="D.C" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weather</title>
    <link href="./css/app.min.css" rel="stylesheet" type="text/css" />
    <link rel="manifest" href="manifest.json" />
    <link rel="apple-touch-icon" href="images/pwa-logo-small.png" />
  </head>

  <body>
    <header>
      <h1>Perth</h1>
    </header>
    <nav>
      <ul>
        <li>
          <a target="bom" href="http://www.bom.gov.au/catalogue/anon-ftp.shtml"
            >Bureau of Meteorology</a
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
        <h2>Information</h2>
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
