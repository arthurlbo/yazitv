import { api } from "@/lib/api";

import { MoviesData } from "./movies/movie";
import { MovieCard } from "./movies/movieCard";
import { MoviesWrapper } from "./movies/moviesWrapper";

const url = "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1";

/**
 * Section that displays the movies watched and stopped by the user.
 */
export const ContinueWatchingSection = async () => {
    const {
        data: { results: movies },
    } = await api.get<MoviesData>(url);

    const moviesList = movies.map((movie) => (
        <MovieCard
            key={movie.id}
            title={movie.title}
            backdrop_path={movie.backdrop_path}
            progress={Math.random() * 101}
        />
    ));

    return <MoviesWrapper title="Continue Watching" moviesList={moviesList} />;
};
