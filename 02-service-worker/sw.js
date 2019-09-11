console.log('hola-2')
// self.addEventListener('fetch', event => {
    // console.log( event );
    // if(event.request.url.includes('style.css')){
    //     event.respondWith( null );
    // } else {
    //     event.respondWith( fetch(event.request) );
    // }

    // console.log('SW data: ', event.request.url.includes('.css'))

    // if(event.request.url.includes('.jpg')){
        // console.log('url', event.request.url);
        
//         let fotoReq = fetch( event.request );

//         event.respondWith( fotoReq )
//     }
// });

// self.addEventListener('fetch', event => {

//     if(event.request.url.includes('style.css')){

//         const respuesta = new Response(
//             `
//             body{
//                 background-color: red !important;
//                 color: pink;
//             }
//             `,
//             {
//                 headers: {
//                     'Content-type': 'text/css'
//                 }
//             }
//         );
//         event.respondWith(respuesta);
//     }

// });

// self.addEventListener('fetch', event => {
//     if(event.request.url.includes('main.jpg')){

//         event.respondWith( fetch('img/main-patas-arriba.jpg') );
//     }
// });

self.addEventListener('fetch', event => {

    const response = fetch( event.request )
        .then( resp =>{
            console.log('resp', resp);
            if(resp.ok){
                return resp;
            } else {
                return fetch('img/main-patas-arriba.jpg');
            }
        })

    event.respondWith( response );
});
