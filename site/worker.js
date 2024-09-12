const version = 1;
const cacheName = `weather-v${version}`;

const resources = [
  "./",
  "./index.php",
  "./favicon.ico",
  "./manifest.json",
  "./css/app.min.css",
  "./js/app.min.js",
  "./js/preload.js",
  "./font/NunitoSans.ttf",
  "./webfonts/fa-regular-400.woff2",
  "./images/1.webp",
  "./images/2.webp",
  "./images/3.webp",
  "./images/4.webp",
  "./images/6.webp",
  "./images/8.webp",
  "./images/9.webp",
  "./images/10.webp",
  "./images/11.webp",
  "./images/12.webp",
  "./images/13.webp",
  "./images/14.webp",
  "./images/15.webp",
  "./images/16.webp",
  "./images/17.webp",
  "./images/18.webp",
  "./images/19.webp",
  "./images/placeholder.webp",
  "./images/sticky.webp",
  "./images/pwa-logo-small.webp",
  "./images/pwa-logo.webp",
  "./IDW12300.xml",
  "./IDW60920.xml",
  "./fallback.php"
];

const installResources = async (resources) => {

  const cache = await caches.open(cacheName);
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {

  console.log("Service worker is installed");
  
  self.skipWaiting();

  event.waitUntil(installResources(resources));
});

const first = async (req) => {

  try {

    const res = await fetch(req);

    if (res) {

      const cache = await caches.open(cacheName);

      const match = await cache.match(req);

      if (cache && match) {

        cache.put(req, res.clone());
      }

      return res;
    }

  } catch (error) {

    console.log(error);

    const cache = await caches.match(req);
      
    if (cache) {

      return cache;
    }

    const fallback = await caches.match("./fallback.php");
      
    if (fallback) {

      return fallback;
    }

    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

self.addEventListener("fetch", (event) => {

  console.log("Fetching via Service worker");

  event.respondWith(first(event.request));
});