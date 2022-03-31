import { version } from '$service-worker';

declare const self: ServiceWorkerGlobalScope;

self.addEventListener('install', function () {
  console.log('Uninstalling Service Worker in favor of version ' + version);
  self.skipWaiting();
});

self.addEventListener('activate', function () {
  self.registration
    .unregister()
    .then(function () {
      return self.clients.matchAll();
    })
    .then(function (clients) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      clients.forEach((client) => client.navigate(client.url));
    });
});
