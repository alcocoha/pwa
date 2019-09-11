//Instalacion de SW
self.addEventListener('install', event => {
    
    const instalacion = new Promise((resolve, reject)=>{
        console.log('Instalando Service Worker!');
        self.skipWaiting();
        resolve();
    });
    event.waitUntil( instalacion );
});

//Cuando el SW toma el control de la aplicación
self.addEventListener('activate', event => {
    
    // Borrar cache
    
    
    console.log('Se activo SW!')
});

//Manejo de peticiones HTTP
self.addEventListener('fetch', event => {

    // console.log('event', event)
    // Aplicar estrategias de cache

    // if(event.request.url.includes('https://reqres.in/api')){
    //     const resp = new Response(`{ok: false, mensaje: 'foooo'}`);
    //     event.respondWith(resp);
    // }
});

// Evento Sync = sirve para recuperar la conexión de internet
self.addEventListener('sync', event => {
    console.log('tenemos conexión')
    console.log(event)
    console.log(event.tag) // que es el tag? es una etiqueta para que sepa que va a hacer porque revisa los TAGS
});

// Push: Maneja las push notifications
self.addEventListener('push', event => {
    console.log('notificación recibida');
    
});