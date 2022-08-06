const t = 'v0.0.9';
self.addEventListener('install', function () {
  console.log('Uninstalling Service Worker in favor of version ' + t), self.skipWaiting();
});
self.addEventListener('activate', function () {
  self.registration
    .unregister()
    .then(function () {
      return self.clients.matchAll();
    })
    .then(function (e) {
      e.forEach(n => n.navigate(n.url));
    });
});
