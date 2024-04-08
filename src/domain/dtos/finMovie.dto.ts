import { MovieProperties } from "../adapters/Movies.interface";

export class FindMovieDto {
    property: MovieProperties;
    val?: any;
    sort?: 'asc' | 'desc';
}