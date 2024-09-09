self.addEventListener("install", function(event) {

  event.waitUntil(
    caches.open("v1").then(function(cache) {
      return cache.addAll([
        "./css/app.min.css",
        "./js/app.min.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {

  if (event.request.destination === "document") {

    event.respondWith(fetch(event.request).catch(() => {

          return caches.match(event.request);
      })
    );
  } else {

    event.respondWith(caches.open("v1").then((cache) => {

      return cache.match(event.request).then((cachedResponse) => {

        const fetchedResponse = fetch(event.request).then((networkResponse) => {

          cache.put(event.request, networkResponse.clone());

          return networkResponse;
        });

        return cachedResponse || fetchedResponse;
      });
    }));
  }
});