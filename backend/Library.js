const Movie = require("./Movie");
const Genre = require("./Genre");

class Library {
  constructor() {
    this.movies = [];

    this.genres = [];
  }

  addGenres(genreArray) {
    for (var i = 0; i < genreArray.length; i++) {
      let tempGenre = new Genre(genreArray[i]);
      this.genres.push(tempGenre);
    }
  }
  getAllGenres() {
    return this.genres;
  }

  addMovie(
    name,
    year,
    age,
    genre,
    desc,
    rating,
    CandC,
    time,
    trailerID,
    director,
    writer
  ) {
    let tempMovie = new Movie(
      name,
      year,
      age,
      genre,
      desc,
      rating,
      CandC,
      time,
      trailerID,
      director,
      writer
    );
    this.movies.push(tempMovie);
  }
  getAllMovies() {
    return this.movies;
  }
  getMoviesByGenre(genre) {
    let filterdMovies = this.movies.filter((oneMovie) => {
      return oneMovie.genre.includes(genre);
    });
    return filterdMovies;
  }
  getMovieByName(movieName) {
    let filterdMovies = this.movies.filter((oneMovie) => {
      return oneMovie.name.includes(movieName);
    });
    return filterdMovies;
  }

  getMovies(attribute, name) {
    let filterdMovies = this.movies.filter((oneMovie) => {
      return oneMovie.attribute.includes(name);
    });
    return filterdMovies;
  }
}
module.exports = Library;
