const express = require('express');
const app = express();

app.get('/', (request, response) => {
    console.log('this is the home page!!');
    // response.send('<h1>Hello from Express</h1>')
    response.sendFile(__dirname__ + '/views/home-page.html');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});