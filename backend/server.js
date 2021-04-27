const express = require('express');
const path = require('path');
const Library = require('./Library')
const app = express();

mainLibrary = new Library();
mainLibrary.addMovie("Jumanji", 2019, "PG13", ["Action", "Comedy"], "It is a really sick movie", [2,4,2], ["The Rock", "Kevin Hart", "Bob"]);
mainLibrary.addMovie("Journey to the mysterious island", 2012, "PG13", ["Action", "Comedy"], "Another sick as movie", [1,3,5], ["Brad Pitt", "Jennifer Lawrence", "Bob"]);
mainLibrary.addMovie("G.I Joe: Retaliation", 2013, "PG13", ["Action", "Sci-Fi"], "Cool fucking movie", [5,4,2,3], ["Genry", "Isac", "Joe", "Bob"]);
mainLibrary.addMovie("Moana", 2015, "PG7", ["Adventure"], "Cool movie about people on a island", [5], ["Moses", "Bob"]);
mainLibrary.addMovie("Scary Bee", 2007, "PG18", ["Horror", "Comedy", "Adventure"], "Super duper scary movie", [5,4,5,5,5], ["Jones", "Kevin Hart", "Bob", "A Bee"]);

//let bugMovies = mainLibrary.getMoviesByGenre("Action");
//console.log(bugMovies);

app.get('/allMovies', (req, res) => {
    let allMovies = mainLibrary.getAllMovies();
    res.json(allMovies);
});
app.get('/genre/:genre', (req,res) => {
    let genre = req.params.genre;
    let moviesByGenre = mainLibrary.getMoviesByGenre(genre);
    res.json(moviesByGenre);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));