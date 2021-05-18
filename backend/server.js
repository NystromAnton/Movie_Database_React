const express = require("express");
const path = require("path");
const Library = require("./Library");
const app = express();

mainLibrary = new Library();
mainLibrary.addMovie(
  "Jumanji: Welcome to the Jungle",
  2017,
  "PG11",
  ["Action", "Comedy", "Adventure"],
  "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.",
  [2, 4, 2],
  [
    {
      name: "Auli'i Cravalho",
      picture:
        "https://m.media-amazon.com/images/M/MV5BNjIxZDI2MTctZTNhOC00NjdlLWI5ZTEtZjZhMmNkNGViZjczXkEyXkFqcGdeQXVyMTE5ODYzODk@._V1_UY317_CR8,0,214,317_AL_.jpg",
    },
    {
      name: "The Rock",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg",
    },
    {
      name: "Rachel House",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMWNmNzEzMGUtMDc1NS00OTlkLWExMzktNTAzOGQ2N2RkMjI3XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY317_CR20,0,214,317_AL_.jpg",
    },
  ],
  "119 min",
  "2QKg5SZ_35I",
  "Jake Kasdan",
  "Chris McKenna"
);
mainLibrary.addMovie(
  "Journey to the Mysterious Island",
  2012,
  "PG7",
  ["Action", "Adventure", "Family"],
  "Sean Anderson partners with his mom's husband on a mission to find his grandfather, who is thought to be missing on a mythical island.",
  [1, 3, 5],
  ["Brad Pitt", "Jennifer Lawrence", "Bob"],
  "94 min",
  "qdFCjwcK8IE",
  "Brad Peyton",
  "Brian Gunn"
);
mainLibrary.addMovie(
  "G.I Joe: Retaliation",
  2013,
  "PG11",
  ["Action", "Sci-Fi"],
  "The G.I. Joes are not only fighting their mortal enemy Cobra; they are forced to contend with threats from within the government that jeopardize their very existence.",
  [5, 4, 2, 3],
  ["Genry", "Isac", "Joe", "Bob"],
  "100 min",
  "w4_SRkrsA30",
  "Jon M. Chu",
  "Rhett Reese"
);
mainLibrary.addMovie(
  "Moana",
  2016,
  "PG7",
  ["Adventure"],
  "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
  [5],
  ["Moses", "Bob"],
  "97 min",
  "LKFuXETZUsI",
  "Ron Clements",
  "Jared Bush"
);
/*mainLibrary.addMovie(
  "Scary Bee",
  2007,
  "PG18",
  ["Horror", "Comedy", "Adventure"],
  "Super duper scary movie",
  [5, 4, 5, 5, 5],
  ["Jones", "Kevin Hart", "Bob", "A Bee"]
);*/

//let bugMovies = mainLibrary.getMoviesByGenre("Action");
//console.log(bugMovies);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  next();
});

app.get("/allMovies", (req, res) => {
  let allMovies = mainLibrary.getAllMovies();
  res.status(200);
  res.json(allMovies);
});
app.get("/genre/:genre", (req, res) => {
  let genre = req.params.genre;
  let moviesByGenre = mainLibrary.getMoviesByGenre(genre);
  if (moviesByGenre.length === 0) {
    res.status(400);
    res.send("Not an existing genre");
  } else {
    res.status(200);
    res.json(moviesByGenre);
  }
});
app.get("/movie/:movieName", (req, res) => {
  let name = req.params.movieName;
  let movieByName = mainLibrary.getMovieByName(name);

  if (movieByName.length === 0) {
    res.status(400);
    res.send("Sorry this movie is not in the database");
  } else {
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
