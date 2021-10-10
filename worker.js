var CACHE_NAME = 'pwa-task-manager';
var urlsToCache = [
  'index.html',
  'read.html',
  'readlisten.html',
  'style.css',
  'listen.html',
  'images/noor1-min.png',
  'images/noor2-min.png',
  'images/noor3-min.png',
  'images/noor4-min.png',
  'images/noor5-min.png',
  'images/noor6-min.png',
  'images/noor7-min.png',
  'images/noor8-min.png',
  'images/noor9-min.png',
  'images/noor10-min.png',
  'images/noor11-min.png',
  'images/noor12-min.png',
  'images/noor13-min.png',
  
  
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = ['pwa-task-manager'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});