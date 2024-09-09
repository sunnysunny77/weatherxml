self.addEventListener("install", function(event) {

  event.waitUntil(
    caches.open("v1").then(function(cache) {
      return cache.addAll([
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
        "./images/sticky.webp",
        "./IDW12300.xml",
        "./IDW60920.xml"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {

  event.respondWith(caches.open("v1").then((cache) => {

      return fetch(event.request).then((networkResponse) => {

        cache.put(event.request, networkResponse.clone());

        return networkResponse;
      }).catch(() => {

        return caches.match(event.request);
    } );
  }));
});