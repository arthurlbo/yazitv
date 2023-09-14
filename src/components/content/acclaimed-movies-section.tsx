import { api } from "@/lib/api";

import { MoviesData } from "./movies/movie";
import { MovieCard } from "./movies/movie-card";
import { MoviesSection } from "./movies/movies-section";

const url = "/movie/top_rated?include_adult=false&include_video=false&language=en-US&page=1";

/**
 * Section that displays the critically acclaimed movies.
 */
export const AcclaimedMoviesSection = async () => {
    const {
        data: { results: movies },
    } = await api.get<MoviesData>(url);

    const moviesList = movies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title} backdrop_path={movie.backdrop_path} />
    ));

    return (
        <MoviesSection
            title="Critically Acclaimed Movies"
            moviesList={moviesList}
            dataTestId="acclaimed-movies-section"
        />
    );
};
