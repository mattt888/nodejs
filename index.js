const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer( function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Posts</h1>`)

        res.write(`<p>Ide</p>`);

        fetch('https://jsonplaceholder.typicode.com/users')
         .then(req=>req.json())
         .then(response=>{
            // console.log(response);
            // console.log('name: ' + response[0].name);
            res.write('name: ' + response[0].name)
            // console.log('RESPONSEE*******************');

            for (let i = 0; i < 1; i++) {
                // console.log('email: ' + response[0].email);
            }

            // response.forEach( function(post) {
            //     console.log(post);
            //     // res.write(`<h4>${post.title}</h4>`)
            //     // res.write(`<h4>${post.body}</h4>`)
            //     // res.write(`<hr />`)
            // }) 
         })

         async function fetchMoviesJSON() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const movies = await response.json();
            return movies;
          }
          
          fetchMoviesJSON().then(movies => {
            console.log(movies[4]);
            return `<p>${movies}</p>`;
          });

        async function logMovies() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const movies = await response.json();
            console.log(movies[9]);
            return `<p>${movies}</p>`;
        }

        const nemtom = logMovies().then(movies => {
            
            console.log(movies[4]);
            return movies;
          });

        res.write(`<p>${nemtom} </p>`);

    res.write(
    `</body>
    </html>`);


    const address = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    return user.address;
  });

const printAddress = async () => {
  const a = await address;
  console.log(a);
};

printAddress();
res.write(`<p>${printAddress()} </p>`);

    res.end( `<p>${nemtom} </p>`)
}); 

server.listen(3000, "localhost", function(){
    console.log('server successfully started at http://localhost:3000');
});