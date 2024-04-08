import { Injectable } from "@nestjs/common";
import { JsonDataServices } from "../persistence/JsonDataService";
import { FindMovieDto } from "src/domain/dtos/finMovie.dto";
import { Movie } from "src/domain/entities/Movie.entity";
import { MovieProperties } from "src/domain/adapters/Movies.interface";

@Injectable()
export class MovieService {
    constructor(
        private readonly db: JsonDataServices
    ) { }

    async find(options: FindMovieDto): Promise<Movie[]> {
        const dbData = await this.db.readData();
        let isAsc: boolean = !options.sort ? false : options.sort === 'asc' ? true : false
        let movies: Movie[];
        if (Object.keys(options).length == 0) {
            return dbData;
        }
        switch (options.property) {
            case MovieProperties.POPULARITY:

                movies = dbData.sort((a: Movie, b: Movie) => {
                    let firstMovie = a;
                    let secondMovie = b;

                    if (isAsc) { firstMovie = b; secondMovie = a };

                    return (firstMovie.ratings.reduce((acc, curr) =>
                        acc + curr
                    ) / firstMovie.ratings.length) - (secondMovie.ratings.reduce((acc, curr) =>
                        acc + curr
                    ) / secondMovie.ratings.length)

                });

                movies = dbData.map((el: Movie) => {

                    const rating = el.ratings.reduce((acc, curr) =>
                        acc + curr
                    ) / el.ratings.length;
                    el.ratings = [rating];

                    return el;

                });


                break;

            case MovieProperties.GENRES:
                movies = dbData.map((el: Movie) => {
                    if (el.genres.includes(options.val)) {
                        el.ratings = [el.ratings.reduce((acc, curr) =>
                            acc + curr
                        ) / el.ratings.length];

                        return el;
                    }

                });
                movies = movies.sort((a: Movie, b: Movie) => (a.ratings.reduce((acc, curr) =>
                    acc + curr
                ) / a.ratings.length) - (b.ratings.reduce((acc, curr) =>
                    acc + curr
                ) / b.ratings.length));

                break;

            case MovieProperties.ACTORS:
                movies = dbData.map((el: Movie) => {
                    if (el.actors.includes(options.val)) {
                        return el;
                    }
                }).filter((movieFiltered: Movie) => {
                    if (movieFiltered !== null)
                        return movieFiltered;
                });
                break;


            case MovieProperties.DURATION:
                movies = dbData.sort((a: Movie, b: Movie) => {
                    let firstMovie = a;
                    let secondMovie = b;

                    if (isAsc) { firstMovie = b; secondMovie = a };

                    const aDuration = parseInt(firstMovie.duration.match(/\d+/)[0], 10);
                    const bDuration = parseInt(secondMovie.duration.match(/\d+/)[0], 10);

                    if (aDuration < bDuration) {
                        return 1;
                    }
                    if (aDuration > bDuration) {
                        return -1;
                    }
                    return 0;
                });

                break;


            case MovieProperties.YEAR:

                movies = dbData;
                if (options.val) {
                    movies = movies.filter((movie: Movie) =>
                        movie.year === options.val
                    )
                } else {

                    movies = movies.sort((a: Movie, b: Movie) => {

                        let firstMovie = a;
                        let secondMovie = b;

                        if (isAsc) { firstMovie = b; secondMovie = a };

                        if (firstMovie.year < secondMovie.year) {
                            return -1;
                        }

                        if (firstMovie.year > secondMovie.year) {
                            return 1;
                        }
                        return 0;
                    })

                }

        }


        return movies;
    }
}