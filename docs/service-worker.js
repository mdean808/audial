const version = "v0.0.5";
self.addEventListener("install", function() {
  console.log("Uninstalling Service Worker in favor of version " + version);
  self.skipWaiting();
});
self.addEventListener("activate", function() {
  self.registration.unregister().then(function() {
    return self.clients.matchAll();
  }).then(function(clients) {
    clients.forEach((client) => client.navigate(client.url));
  });
});
