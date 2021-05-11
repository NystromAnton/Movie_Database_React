const express = require("express");
const path = require("path");
const Library = require("./Library");
const app = express();

mainLibrary = new Library();
mainLibrary.addMovie(
  "Jumanji",
  2019,
  "PG13",
  ["Action", "Comedy"],
  "It is a really sick movie",
  [2, 4, 2],
  ["The Rock", "Kevin Hart", "Bob"]
);
mainLibrary.addMovie(
  "Journey to the mysterious island",
  2012,
  "PG13",
  ["Action", "Comedy"],
  "Another sick as movie",
  [1, 3, 5],
  ["Brad Pitt", "Jennifer Lawrence", "Bob"]
);
mainLibrary.addMovie(
  "G.I Joe: Retaliation",
  2013,
  "PG13",
  ["Action", "Sci-Fi"],
  "Cool fucking movie",
  [5, 4, 2, 3],
  ["Genry", "Isac", "Joe", "Bob"]
);
mainLibrary.addMovie(
  "Moana",
  2015,
  "PG7",
  ["Adventure"],
  "Cool movie about people on a island",
  [5],
  ["Moses", "Bob"]
);
mainLibrary.addMovie(
  "Scary Bee",
  2007,
  "PG18",
  ["Horror", "Comedy", "Adventure"],
  "Super duper scary movie",
  [5, 4, 5, 5, 5],
  ["Jones", "Kevin Hart", "Bob", "A Bee"]
);

// Add genres
genres = ["Horror", "Comedy", "Adventure", "Action", "Sci-Fi"];
mainLibrary.addGenres(genres);

//let bugMovies = mainLibrary.getMoviesByGenre("Action");
//console.log(bugMovies);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  next();
});


app.get('/allMovies', (req, res) => {
    let allMovies = mainLibrary.getAllMovies();
    res.status(200);
    res.json(allMovies);
});
app.get('/genre/:genre', (req,res) => {
    let genre = req.params.genre;
    let moviesByGenre = mainLibrary.getMoviesByGenre(genre);
    if(moviesByGenre.length === 0) {
        res.status(400);
        res.send("Not an existing genre");
    }
    else {
        res.status(200);
        res.json(moviesByGenre);
    }    
});
app.get("/allGenres", (req, res) => {
  let allMovies = mainLibrary.getAllGenres();
  res.json(allMovies);
});
app.get("/genre/:genre", (req, res) => {
  let genre = req.params.genre;
  let moviesByGenre = mainLibrary.getMoviesByGenre(genre);
  res.json(moviesByGenre);
app.get('/movie/:movieName', (req, res) => {
    let name = req.params.movieName;
    let movieByName = mainLibrary.getMovieByName(name);

    if(movieByName.length === 0) {
        res.status(400);
        res.send("Sorry this movie is not in the database");
    }
    else {
        res.status(200);
        res.json(movieByName);
    }
});

//TODO: Get by anything by using something like app.get('api/:attribute/:nameToGetBy) 
/*app.get('/api/:attribute/:name', (req, res) => {
    let name = req.params.name;
    let attribute = req.params.attribute;
    let movieByName = mainLibrary.getMovies(attribute, name);
    res.json(movieByName);
});*/



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
