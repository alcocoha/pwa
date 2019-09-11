// fetch('https://reqres.in/api/user/1')
//     .then( resp => {
//         console.log("resp-1", resp.clone().json() );

//         resp.clone().json()
//             .then( console.log );

//         return resp.json();
//     })
//     .then( console.log )
//     .catch(err => {
//         console.log('Error: ', err)
//     });

fetch('https://reqres.in/api/user/1000')
    .then( resp => {
        console.log('resp', resp)
        if(resp.ok){
            return resp.json();
        } else {
            throw new Error('No existe el usuario 1000'); 
        }
    })
    .then( console.log )
    .catch(err => {
        console.log(err)
    });