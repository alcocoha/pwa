console.log("hola mundo")

function sumarUno(numero, callback){

    if(numero > 7){
        callback("Esto es un error de ejemplo de callbacks");
        return;
    }

    setTimeout(()=>{
        callback(null, numero + 1);
    }, 1000);
}

sumarUno(7, (error, nuevoValor) => {

    if(error){
        console.log(error);
        return;
    }
    sumarUno(nuevoValor, (error, nuevoValor2) => {
        if(error){
            console.log(error);
            return;
        }
        console.log('nuevoValor2', nuevoValor2)
    })
});