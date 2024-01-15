const http = require('http');
const server = http.createServer( (req, res) => {
    res.writeHead( 200, {'Content-Type': 'text/html; charset=utf-8'})

    if ( req.url === '/'){

        if(req.method === 'GET'){

            res.write(`<p>Kezdőoldal</p>`)

            res.write(`<form action="/" method=post>  
                            <input type="text" name="name">    
                            <button>Küldés</button>
                       </form>`)
          
            res.write(`<p>Request method: ${req.method}</p>`)
            res.write(`<p>${req.method}</p>`)
            
            console.log('GET request');

        }
        else if (req.method === 'POST'){

            res.write(`<p>Request method: ${req.method}</p>`)
            res.write(`<p>POST metódussal küldve: ${req.method}</p>`)
            console.log('ellenőrzés = POST method');

            let data = ''
            req.on('data', chunk => {
            data += chunk
            console.log('Buffer a következő sorban: ')
            console.log(chunk)
            console.log('Chunk: ' + chunk) 
            console.log('Data: ' + data)
            console.log('**************')
            })
        }
        else {
            res.write(`405 method not allowed`)
        }
        
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

    res.end()
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});