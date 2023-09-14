import { api } from "@/lib/api";

import { MoviesData } from "./movies/movie";
import { MovieCard } from "./movies/movie-card";
import { MoviesWrapper } from "./movies/movies-wrapper";

const url = "/movie/top_rated?include_adult=false&include_video=false&language=en-US&page=2";

/**
 * Section that displays the top picks movies for the user.
 */
export const TopPicksSection = async () => {
    const {
        data: { results: movies },
    } = await api.get<MoviesData>(url);

    const moviesList = movies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title} backdrop_path={movie.backdrop_path} />
    ));

    return <MoviesWrapper title="Top Picks for Arthur" moviesList={moviesList} />;
};
