const usuario = {
    nombre: 'jorge',
    edad: 38
}

fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( resp => resp.json() )
    .then( console.log )
    .catch( err => console.log('Error en el send: ', err));