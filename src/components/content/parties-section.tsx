import { api } from "@/lib/api";

import { MoviesData } from "./movies/movie";
import { MovieCard } from "./movies/movie-card";
import { MoviesSection } from "./movies/movies-section";

interface Genre {
    id: number;
    name: string;
}

interface GenresData {
    genres: Genre[];
}

const url = "/discover/movie?include_adult=false&include_video=false&language=en-US&page=2";

/**
 * Section that displays the movies watched in party mode.
 */
export const PartiesSection = async () => {
    const {
        data: { genres },
    } = await api.get<GenresData>("/genre/movie/list?language=en");

    const {
        data: { results: movies },
    } = await api.get<MoviesData>(url);

    const handleGenres = (genreIds: number[]) => {
        return genreIds.map((genreId) => {
            const genre = genres.find((genre) => genre.id === genreId);
            return genre ? genre.name : "";
        });
    };

    const moviesList = movies.map((movie) => (
        <MovieCard
            key={movie.id}
            title={movie.title}
            backdrop_path={movie.backdrop_path}
            isParty
            genres={handleGenres(movie.genre_ids)}
        />
    ));

    return <MoviesSection title="Parties" moviesList={moviesList} dataTestId="parties-section" />;
};
