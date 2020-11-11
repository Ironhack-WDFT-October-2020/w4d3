const express = require('express');
const app = express();

// this makes the public folder available in the html files
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    console.log('this is the home page!!');
    // response.send('<h1>Hello from Express</h1>')
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/dog', (req, res) => {
    res.sendFile(__dirname + '/views/dog.html');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});