const http = require('http');
const fs = require('fs')
const utilities = require('./utilities')
const querystring = require('querystring')

const server = http.createServer( (req, res) => {
    res.writeHead( 200, {'Content-Type': 'text/html; charset=utf-8'})

    switch (req.url) {
        case '/':
            utilities.getView('homepage', res)
            return
            
       case '/about':
            utilities.getView('about', res)
            return
            
        case '/contact':
            utilities.getView('contact', res)
            return
            
        case '/users':
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => {

                const eredmeny = result.map( user => {
                    return `<a href="/users/${user.id}"><li>${user.name}</li></a>`
                }).join('')

                console.log(eredmeny)
                utilities.getView('users', res, eredmeny)
                
            })
            return;

        default: res.write('Az oldal nem található')
            break;
    }

    res.end();

});

server.listen(3000, () => {
  console.log('Server is running on port 3000'); 
});