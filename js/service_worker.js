export const service_worker = () => {

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/worker.js").then((registration) => {
      console.log("Service worker registration succeeded:", registration);
    }).catch((error) => {
      console.error(`Service worker registration failed: ${error}`);
    });
  } else {
    console.error("Service workers are not supported.");
  }
};