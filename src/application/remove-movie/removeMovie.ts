import { Injectable } from "@nestjs/common";
import { MoviesRepository } from "src/domain/repositories/Movie.repository.interface";

@Injectable()
export class RemoveMovies {
    constructor(private readonly repository: MoviesRepository) { }

    async execute(property: string, value: any) {
        const movie = await this.repository.remove(property, value);
        return movie;
    }
}