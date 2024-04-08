export interface IMovie {
    title: string;
    year: string;
    genres: Genre[];
    ratings: number[];
    viewerCount: number;
    storyline: string;
    actors: string[];
    duration: string;
    releaseDate: Date;
    contentRating: ContentRating;
    posterImage: string;
}

export enum MovieProperties {
    POPULARITY = 'popularity',
    TITLE = 'title',
    YEAR = 'year',
    GENRES = 'genres',
    ACTORS = 'actors',
    DURATION = 'duration',
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
