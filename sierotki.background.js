console.log('bg')

self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message',function(event){
  console.log(self.clients);
  if(event.data && event.data.execCommand){
    
  }
})