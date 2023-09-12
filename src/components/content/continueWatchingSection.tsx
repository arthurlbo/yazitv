import { api } from "@/lib/api";

import { MoviesData } from "./movies/movie";
import { MovieCard } from "./movies/movieCard";
import { MoviesWrapper } from "./movies/moviesWrapper";

export const ContinueWatchingSection = async () => {
    const {
        data: { results: movies },
    } = await api.get<MoviesData>("/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1");

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