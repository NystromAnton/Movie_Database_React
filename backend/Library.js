const Movie = require('./Movie');


class Library {
    constructor(){
        this.movies = [];
    };
    addMovie(name, year, age, genre, desc, rating, CandC) {
        let tempMovie = new Movie(name, year, age, genre, desc, rating, CandC);
        this.movies.push(tempMovie);
    }
    getAllMovies() {
        return this.movies;
    }
};
module.exports = Library;