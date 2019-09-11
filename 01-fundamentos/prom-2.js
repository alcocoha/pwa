console.log("hola mundo")

function sumarUno(numero){

    let promesa = new Promise((resolve, reject) => {

        if(numero > 7){
            reject('El numero es muy alto');
        }

        setTimeout(()=>{

            resolve(numero + 1);

        }, 1000);
    });
    
    return promesa;
}

sumarUno(7)
    .then(resp=>{
        sumarUno(resp)
            .then(resp2 => console.log('resp2', resp2))
            .catch( err => console.log('err-1', err));
    });


sumarUno(1)
    .then( resp => sumarUno(resp))
    .then( resp => sumarUno(resp))
    .then( resp => sumarUno(resp))
    .then( resp => sumarUno(resp))
    .then( resp => console.log('resp', resp))
    .catch( err => console.log('err-2', err));

sumarUno(20)
    .then( sumarUno )
    .then( sumarUno )
    .then( sumarUno )
    .then( sumarUno )
    .then( sumarUno )
    .then( sumarUno )
    .then( sumarUno )
    .then( sumarUno )
    .then( sumarUno )
    .then( sumarUno )
    .then( resp => console.log('resp', resp))
    .catch( err => console.log('err-3', err));
