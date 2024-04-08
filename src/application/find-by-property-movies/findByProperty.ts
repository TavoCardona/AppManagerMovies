import { Injectable } from "@nestjs/common";
import { MoviesRepository } from "src/domain/repositories/Movie.repository.interface";

@Injectable()
export class FindByPropertyMovies {
    constructor(private readonly repository: MoviesRepository) { }

    async execute(property: string, value: any) {
        const movie = await this.repository.findByProperty(property, value);
        return movie;
    }
}