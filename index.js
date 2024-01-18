const http = require('http');
const fs = require('fs')
const utilities = require('./utilities')

const server = http.createServer( (req, res) => {
    res.writeHead( 200, {'Content-Type': 'text/html; charset=utf-8'})

    if ( req.url === '/'){
        utilities.getView('homepage', res)
        return
    }

    else if (req.url === '/about'){
        res.write('Rólunk')
    }

    else if (req.url === '/contact'){
        res.write('Kapcsolat')
    }

    else {
        res.write('Az oldal nem található')
    }

});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});