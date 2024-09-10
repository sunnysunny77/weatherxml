const version = 1;
const cacheName = `weather-v${version}`;

const cacheAssets = [
  "./",
  "./index.php",
  "./css/app.min.css",
  "./js/app.min.js",
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
  "./IDW12300.xml",
  "./IDW60920.xml"
];

self.addEventListener("install", (event) => {

  console.log("Service worker is installed");

  event.waitUntil(caches.open(cacheName).then((cache) => {

    console.log("Caching assets");
    cache.addAll(cacheAssets);
  }).then(() => {

    self.skipWaiting();
  }));
});

self.addEventListener("fetch", (event) => {

  console.log("Fetching via Service worker");

  event.respondWith(fetch(event.request).then((networkResponse) => {
    
    return caches.open(cacheName).then((cache) => {

      cache.put(event.request, networkResponse.clone());
      return networkResponse;
    });
  }).catch(() => {
    
    return caches.match(event.request);
  }));
});