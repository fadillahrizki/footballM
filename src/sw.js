const base_url = "https://api.football-data.org/v2/"
const deploy_url = "https://fadillahrizki.github.io/footballM/"
const local_url = "http://localhost:8080"

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  ({url}) => url.origin === base_url,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  ({url}) => url.origin === deploy_url,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  ({url}) => url.origin === local_url,
  new workbox.strategies.StaleWhileRevalidate()
);

self.addEventListener('push', (event) => {
  const title = 'Get Started With Workbox';
  const options = {
    body: event.data.text()
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);