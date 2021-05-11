class Movie {
    constructor(name, year, age, genre, desc, rating, CandC) {
        this.name = name;
        this.year = year;
        this.age = age;
        this.genre = genre;
        this.desc = desc;
        this.rating = rating;
        this.CandC = CandC;

        let sum = rating.reduce((a,b) => a + b, 0);
        let avg = (sum / rating.length) || 0;
        this.averageRating = avg;

        //Funky randomly generated data for the movies.

        this.jumpScares = Math.floor(Math.random() * 100);
        this.explosions = Math.floor(Math.random() * 1000);
        this.laugtableScenes = Math.floor(Math.random() * 70);
        this.rewatchable = Math.floor(Math.random() * 101);
        this.rockInThePicture = Math.floor(Math.random() * 121);
    };
};
module.exports = Movie;