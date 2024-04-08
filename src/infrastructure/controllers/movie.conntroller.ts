import { Body, Controller, Post } from "@nestjs/common";
import { ApiCreatedResponse } from "@nestjs/swagger";
import { FindMovies } from "src/application/find-movies/findMovies";
import { FindMovieDto } from "src/domain/dtos/finMovie.dto";

@Controller('movie')
export class MovieController {
    constructor(private readonly findMovie: FindMovies) {

    }
    @Post()
    @ApiCreatedResponse({ description: 'Returned movies' })
    FindMovies(@Body() queryValues: FindMovieDto) {
        return this.findMovie.execute(queryValues);
    }
}