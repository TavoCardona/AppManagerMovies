import { Injectable } from "@nestjs/common";
import { Movie } from "src/domain/entities/Movie.entity";
import { MoviesRepository } from "src/domain/repositories/Movie.repository.interface";

@Injectable()
export class SaveMovie {
    constructor(private readonly repository: MoviesRepository) { }

    async execute(movie: Movie) {
        const movieResponse = await this.repository.save(movie);
        return movieResponse;
    }
}