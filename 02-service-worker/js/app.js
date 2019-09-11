// if('serviceWorker' in navigator){
//     console.log("podemos usarlo")
// }

if(navigator.serviceWorker){
    console.log('podemos usarlo yuju =)')
    navigator.serviceWorker.register('sw.js');
}