const Movie = require("./Movie");
const Genre = require("./Genre");

class Library {
  constructor() {
    this.movies = [];
    this.genres = [];
  }
  addMovie(name, year, age, genre, desc, rating, CandC) {
    let tempMovie = new Movie(name, year, age, genre, desc, rating, CandC);
    this.movies.push(tempMovie);
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
  getAllMovies() {
    return this.movies;
  }
  getMoviesByGenre(genre) {
    let filterdMovies = this.movies.filter((oneMovie) => {
      return oneMovie.genre.includes(genre);
    });
    return filterdMovies;
  }
}
module.exports = Library;
