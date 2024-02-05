const http = require('http');
const fs = require('fs')
const utilities = require('./utilities')
const querystring = require('querystring')

const server = http.createServer( (req, res) => {
    res.writeHead( 200, {'Content-Type': 'text/html; charset=utf-8'})

    if ( req.url === '/'){
        utilities.getView('homepage', res)
        console.log('Kezdő oldal')
        return
    }

    else if (req.url === '/about'){
        utilities.getView('about', res)
        console.log('Rólunk')
        return
    }

    else if (req.url === '/contact'){
        utilities.getView('contact', res)
        console.log('Kapcsolat')
        return
    }

    else if (req.url === '/users'){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => {
                const eredmeny = result.map( user => {
                    return `<a href="/users/${user.id}"><li>${user.name}</li></a>`
                }).join('')

                console.log('Felhasználók:')
                console.log(eredmeny)
                utilities.getView('users', res, eredmeny)
                
            })
            return;
    }

    else if (/^\/users\/([0-9])/.test(req.url) ) {
        console.log('req.url értéke:', req.url);
        console.log('else if kifejezés értéke:', /^\/users\/([0-9])/.test(req.url));
        let idpart =  req.url.split('/')
        console.log('idpart értéke:', idpart);
        const id = idpart[idpart.length-1] || false
        console.log('id változó értéke:', id);

        if (id) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(result => {
                    const user = result.filter((userrr) => {
                        return userrr.id == id
                    })
                    console.log(user)
                    const userDetails = user.map( itemek => {
                        return `<li>id: ${itemek.id}</li>
                                <li>username: ${itemek.username}</li>
                                <li>email: ${itemek.email}</li>
                                <li>Street: ${itemek.address.street}</li>`
                    })
                    
                    console.log(JSON.stringify(user))
                    console.log('\'user\' Változó típusa:', typeof(user))
                    console.log('\'userDetails\' Változó típusa:', typeof(userDetails))
                    utilities.getView('users', res, userDetails)
                })
                return
        }
    }

    else {
        res.write('Az oldal nem található')
    }

    res.end();

});

server.listen(3000, () => {
  console.log('Server is running on port 3000'); 
});