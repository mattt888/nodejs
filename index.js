const http = require('http');

const server = http.createServer((req, res) => {
 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(`<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8" />
      <title>Hello world demo</title>
  </head>
  <body>
      <h1>Hello world</h1>`);
      fetch( 'https://jsonplaceholder.typicode.com/posts' )
        .then(resp=>resp.json())
        .then(resp=>{
          resp.forEach( row => {
            res.write(`<h3>${row.title}</h3>`)
            res.write(`<p>${row.body}</p>`)
          } )
          res.write(`</body>
          </html>`);
        })
        .finally(()=>{

          res.end();
        })

});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});