self.addEventListener(//Listinner permite promesar un argumento
    'fetch',
    function (event) {//event recibe el evento que se produjo , evento fecth
      if (/\.jpg$/.test(event.request.url)) {
        event.respondWith(fetch('snooppy.jpg'));
      }
    }
);
  