
// Ciclo de vida del SW

//Aquí instalamos el SW
self.addEventListener('install', event => {
    console.log('event :', event);
    console.log('instalando SW');

    const instalacion = new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('SW: instalacion terminada')
            self.skipWaiting();
            resolve();
        }, 1000);
    });

    event.waitUntil( instalacion );
});

// Aquí el SW toma el control de la aplicación
self.addEventListener('activate', event => {
    console.log('SW: Activado')
});

// FETCH: Manejo de peticiones HTTP --- en este listener se aplican las estrategias de cache
self.addEventListener('fetch', event => {

    // Aplicar estrategias del cache
    // console.log('SW:', event.request.url);

    // if(event.request.url.includes('https://reqres.in/api/')){
    //     const resp = new Response(`{ok: false, mensaje: jajaja}`);

    //     event.respondWith( resp );
    // }
});

//SYNC: Es cuando recuperamos la conexion a internet
self.addEventListener('sync', event => {
    console.log('Tenemos conexion');
    console.log(event)
    console.log(event.tag)
});

//PUSH: Maneja las push notifications
self.addEventListener('push', event => {

});

