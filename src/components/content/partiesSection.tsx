import { api } from "@/lib/api";

import { MoviesData } from "./movies/movie";
import { MovieCard } from "./movies/movieCard";
import { MoviesWrapper } from "./movies/moviesWrapper";

interface Genre {
    id: number;
    name: string;
}

interface GenresData {
    genres: Genre[];
}

export const PartiesSection = async () => {
    const url = "/discover/movie?include_adult=false&include_video=false&language=en-US&page=2";

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

    return <MoviesWrapper title="Parties" moviesList={moviesList} />;
};
