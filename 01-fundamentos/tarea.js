function postData(resp){
    const user = {
        name: resp.name,
        gender: resp.gender
    }

    return fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

fetch('https://swapi.co/api/people/1')
    .then(resp => resp.json())
    .then(postData)
    .then(resp => resp.json())
    .then(console.log);