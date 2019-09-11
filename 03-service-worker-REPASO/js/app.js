// Registramos el service worker

if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
        .then( reg => {
            // console.log('Registro then');
            // setTimeout(()=>{
            //     reg.sync.register('posteo-gatitos');
            //     console.log('se enviaron fotos al server')
            // }, 3000);
            Notification.requestPermission().then( result => {
                console.log('result', result)
                reg.showNotification('hola mundo!');
            });
        })
    
}

if(window.SyncManager){
    console.log('Existe Sync Manager')
}

// fetch('https://reqres.in/api/users')
//     .then(resp=>resp.text())
//     .then(console.log);