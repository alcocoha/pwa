function retornaTrue(){
    return true;
}

function sumarLento(numero){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(numero + 1);
            // reject("Sumar lento fallo");
        }, 2000);
    });
}

const sumarRapido = numero => new Promise((resolve, reject)=>{
    setTimeout(() => resolve(numero + 1), 800);
});

sumarLento(5).then( console.log ).catch( console.log );
sumarRapido(10).then( console.log ).catch( console.log );

Promise.all([sumarLento(5), sumarRapido(10), true, 'hola mundo', retornaTrue()])
    .then( console.log )
    .catch( console.log );