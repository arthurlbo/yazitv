import { api } from "@/lib/api";

import { MoviesData } from "./movies/movie";
import { MovieCard } from "./movies/movie-card";
import { MoviesSection } from "./movies/movies-section";

const url = "/trending/all/day?include_adult=false&include_video=false&language=en-US&page=1";

/**
 * Section that displays the trending movies.
 */
export const TrendingNowSection = async () => {
    const {
        data: { results: movies },
    } = await api.get<MoviesData>(url);

    const moviesList = movies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title} backdrop_path={movie.backdrop_path} />
    ));

    return <MoviesSection title="Trending Now" moviesList={moviesList} dataTestId="trending-now-section" />;
};
