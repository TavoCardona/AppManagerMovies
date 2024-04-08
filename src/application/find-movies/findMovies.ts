import { Injectable } from "@nestjs/common";
import { FindMovieDto } from "src/domain/dtos/finMovie.dto";
import { MoviesRepository } from "src/domain/repositories/Movie.repository.interface";

@Injectable()
export class FindMovies {
    constructor(private readonly repository: MoviesRepository) { }

    async execute(options?: FindMovieDto) {
        const movies = await this.repository.find(options);
        return movies;
    }
}