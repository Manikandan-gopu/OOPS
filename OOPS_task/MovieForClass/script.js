// Class For a movie

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(arr) {
        const newArr = [];
        arr.forEach((element) => {
            // Checking if the element's rating is "PG"
            if (element.rating === "PG") {
                newArr.push(element);
            }
        });
        return newArr;
    }
}

const movies = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(movies);

const movieArray = [
    new Movie("Casino Royale", "Eon Productions", "PG-13"),
    new Movie("MahaRaja", "Neon Films", "PG"),
    new Movie("Star", " Entertainment", "PG"),
    new Movie("Master", "XB Film Creators", "PG-13"),
    new Movie("Kaithi", "Dream Warrior Pictures", "PG"),
    new Movie("Jai Bhim", "2D Entertainment", "PG")
];

const pgMovies = Movie.getPG(movieArray);
console.log(pgMovies);
