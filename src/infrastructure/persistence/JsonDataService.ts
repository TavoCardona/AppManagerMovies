import { Injectable } from "@nestjs/common";
import * as fs from 'fs';
import { Movie } from "src/domain/entities/Movie.entity";
@Injectable()
export class JsonDataServices {

    private readonly jsonPath = 'src/infrastructure/persistence/db/movies.json';

    constructor() { }

    async readData(): Promise<Movie[]> {
        try {
            const data = fs.readFileSync(this.jsonPath, 'utf-8');

            let dataMovie: Movie[] = JSON.parse(data);
            return dataMovie;

        } catch (error) {
            throw new Error(error);
        }
    }

    async writeData(data: any) {
        try {
            fs.writeFileSync(this.jsonPath, JSON.stringify(data, null, 2), 'utf-8');

        } catch (error) {
            throw new Error(error);
        }
    }

}