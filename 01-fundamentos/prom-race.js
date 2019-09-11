
function sumarLento(numero){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // resolve(numero + 1);
            reject("Sumar lento fallo");
        }, 2000);
    });
}

const sumarRapido = numero => new Promise((resolve, reject)=>{
    setTimeout(() => {
        // resolve(numero + 1)
        reject("Fallo en sumar rápido");
    }, 800);
});

Promise.race([sumarLento(5), sumarRapido(10)])
    .then(console.log)
    .catch(console.log)
