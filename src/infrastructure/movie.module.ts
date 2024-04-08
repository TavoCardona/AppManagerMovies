import { Module } from "@nestjs/common";
import { MovieController } from "./controllers/movie.conntroller";
import { MovieService } from "./services/movie.service";
import { MoviesRepository } from "src/domain/repositories/Movie.repository.interface";
import { JsonDBMovieRepository } from "./persistence/JsonDBMovieRepository";
import { FindMovies } from "src/application/find-movies/findMovies";
import { JsonDataServices } from "./persistence/JsonDataService";

@Module({
    imports: [],
    controllers: [MovieController],
    providers: [
        MovieService,
        {
            provide: MoviesRepository,
            useClass: JsonDBMovieRepository,
        },
        FindMovies,
        JsonDataServices
    ]
})

export class MovieModule { };