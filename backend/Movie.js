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
    };
};
module.exports = Movie;