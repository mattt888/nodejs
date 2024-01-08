const http = require('http');

// Create a local server to receive data from
const server = http.createServer( function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify( {myMessage: 'Hello World!!'}) )
});

server.listen(3000, "localhost", function(){
    console.log('server successfully started at http://localhost:3000');
});