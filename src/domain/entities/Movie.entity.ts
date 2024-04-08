import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class Movie {
    @ApiProperty({
        description: 'Título de la película',
        type: 'string',
        required: true,
    })
    @IsString({
        message: 'El título de la película debe ser una cadena de texto',
    })
    @IsNotEmpty({
        message: 'El título de la película no puede ser vacio',
    })
    title: string;

    @ApiProperty({
        description: 'Año de la película',
        required: true,
    })
    year: string;


    @ApiProperty({
        description: 'Genero de la película',
        required: true,
    })
    genres: Genre;


    @ApiProperty({
        description: 'Ratings',
        required: true,
    })
    @IsNumber()
    @IsNotEmpty({
        message: 'Los valores de ratings deben ser númericos'
    })
    ratings?: number[];

    @ApiProperty({
        description: 'Contador de vistas',
        required: true,
    })
    viewerCount: number;

    @ApiProperty({
        description: '',
        required: true,
    })
    storyline: string;

    @ApiProperty({
        description: 'Actores',
        required: true,
    })
    actors: string[];

    @ApiProperty({
        description: 'Duración de película',
        required: true,
    })
    duration: string;

    @ApiProperty({
        description: 'Fecha de estreno',
        required: true,
    })
    releaseDate: Date;

    @ApiProperty({
        description: '',
        required: true,
    })
    contentRating: ContentRating;

    @ApiProperty({
        description: 'Imagen de película',
        required: true,
    })
    posterImage: string;


}


export enum ContentRating {
    G = "G",
    Nc17 = "NC-17",
    PG = "PG",
    PG13 = "PG-13",
    R = "R",
}

export enum Genre {
    Action = "Action",
    Adventure = "Adventure",
    Animation = "Animation",
    Biography = "Biography",
    Comedy = "Comedy",
    Crime = "Crime",
    Documentary = "Documentary",
    Drama = "Drama",
    Family = "Family",
    Fantasy = "Fantasy",
    Historical = "Historical",
    Horror = "Horror",
    Musical = "Musical",
    Mystery = "Mystery",
    Romance = "Romance",
    SciFi = "Sci-Fi",
    Thriller = "Thriller",
    War = "War",
    Western = "Western",
}