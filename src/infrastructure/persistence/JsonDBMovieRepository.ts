import { Injectable } from "@nestjs/common";
import { FindMovieDto } from "src/domain/dtos/finMovie.dto";
import { Movie } from "src/domain/entities/Movie.entity";
import { MoviesRepository } from "src/domain/repositories/Movie.repository.interface";
import { MovieService } from "../services/movie.service";

@Injectable()
export class JsonDBMovieRepository implements MoviesRepository {


    constructor(private readonly movieService: MovieService) { }
    async save(movie: Movie): Promise<Movie> {
        return;
    }

    async findByProperty(property: string, value: any): Promise<Movie> {
        return;
    }

    async find(options?: FindMovieDto): Promise<Movie[]> {
        return await this.movieService.find(options);
    }

    async remove(property: string, value: any): Promise<Movie> {
        return;
    }
}