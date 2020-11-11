const express = require('express');
const app = express();
const movies = require('./movies.json');
// console.log(movies);


app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    const todoList = ['learn node', 'learn react', 'play nintendo'];
    const name = 'Jeffy';
    res.render('index', {
        todos: todoList,
        name: 'Timmy'
    })
});

app.get('/movies', (req, res) => {
    res.render('movies', { moviesList: movies })
});

app.listen(3000);