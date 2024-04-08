import { FindMovieDto } from "../dtos/finMovie.dto";
import { Movie } from "../entities/Movie.entity";

export abstract class MoviesRepository {
    abstract save(movie: Movie): Promise<Movie>;
    abstract find(options?: FindMovieDto): Promise<Movie[]>;
    abstract findByProperty(property: string, value: any): Promise<Movie | null>;
    abstract remove(property: string, value: any): Promise<Movie>;
}