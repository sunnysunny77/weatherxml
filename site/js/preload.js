const preload = (href, as) => {
  const preloadLink = document.createElement("link");
  preloadLink.href = href;
  preloadLink.rel = "preload";
  preloadLink.as = as;
  preloadLink.crossOrigin = "true";
  document.head.appendChild(preloadLink);
};

preload ("./webfonts/fa-regular-400.woff2", "font");
preload ("./font/NunitoSans.ttf", "font");

