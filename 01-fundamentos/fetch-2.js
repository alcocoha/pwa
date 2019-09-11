
fetch('https://reqres.in/api/users')
    .then( resp => {
        const r = resp.json();
        console.log('resp.headers()', resp.headers);
        console.log('resp.json()', r)
        // console.log('resp.json()', resp.json())
        // console.log('resp.json()', resp.json())
        return r;
    })
    .then( console.log )
    .catch( console.log )

// fetch('http://es.wikipedia.org/')
//     .then(console.log)