import { api } from "@/lib/api";

import { MoviesData } from "./movies/movie";
import { MovieCard } from "./movies/movieCard";
import { MoviesWrapper } from "./movies/moviesWrapper";

export const TopPicksSection = async () => {
    const url = "/movie/top_rated?include_adult=false&include_video=false&language=en-US&page=2";

    const {
        data: { results: movies },
    } = await api.get<MoviesData>(url);

    const moviesList = movies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title} backdrop_path={movie.backdrop_path} />
    ));

    return <MoviesWrapper title="Top Picks for Arthur" moviesList={moviesList} />;
};
