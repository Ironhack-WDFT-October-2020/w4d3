//  First Node Server
const http = require('http');
const port = 3000;

// create a server - gets a request handler as a parameter
const server = http.createServer((request, response) => {
    console.log('hello');
    if (request.url === '/') {
        response.write('This is the home page')
        response.end();
    }
    if (request.url === '/about') {
        response.end('<h1>This is the about page</h1>');
    } else {
        response.end('<h1>404 - Not found</h1>');
    }
});

// starting the server
server.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});