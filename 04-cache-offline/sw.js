
console.log('hola sw')

// const CACHE_NAME = 'cache-1';

const CACHE_STATIC_NAME = 'static-v2';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
const CACHE_INMUTABLE_NAME = 'inmutable-v1';

function limpiarCache( cacheName, numItems){
    caches.open(CACHE_DYNAMIC_NAME)
        .then(cache => {
            return cache.keys()
                .then( keys => {
                    console.log('keys :', keys);
                    if(keys.length > numItems){
                        cache.delete(keys[0])
                            .then( limpiarCache(cacheName, numItems) );
                    }
                });
        });
}


// EL APP SHELL :   --- ES LO QUE LA APLICACIÓN NECESITA A FUERZA PARA QUE FUNCIONE

self.addEventListener('install', event => {

    const cacheStatic = caches.open(CACHE_STATIC_NAME)
        .then( cache => {

            // Grabamos los archivos que queremos en el cache
            return cache.addAll([ // este es el APP SHELL
                '/',
                '/index.html',
                '/css/style.css',
                '/img/main.jpg',
                '/js/app.js',
            ]);


        });
    
    const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME)
        .then( cache => {

            // Grabamos los archivos que queremos en el cache
            return cache.addAll([
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
            ]);


        });

        event.waitUntil( Promise.all([cacheStatic, cacheInmutable]) );

});

// ESTRATEGIAS DE CACHE
self.addEventListener('fetch', event => {


    // 1- Cache Only : Se usa cuando queremos que toda la aplicación sea servida del cache.
    // event.respondWith( caches.match( event.request ) );


    // 2- Cache with network fallback
    const respCache = caches.match( event.request )
        .then( resp => {

            // console.log('resp', resp)

            if( resp ) return resp;

            // console.log('No existe ', event.request.url )

            return fetch( event.request )
                    .then(respNet => {

                        // console.log('respNet', respNet);

                        caches.open(CACHE_DYNAMIC_NAME)
                            .then(cache => {
                                cache.put(event.request, respNet);
                                limpiarCache( CACHE_DYNAMIC_NAME, 2);
                            });
                        
                        return respNet.clone();
                    });

        });

    event.respondWith( respCache );

});