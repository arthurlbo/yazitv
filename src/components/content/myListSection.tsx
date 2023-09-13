import { api } from "@/lib/api";

import { MoviesData } from "./movies/movie";
import { MovieCard } from "./movies/movieCard";
import { MoviesWrapper } from "./movies/moviesWrapper";

export const MyListSection = async () => {
    const url = "/discover/movie?include_adult=false&include_video=false&language=en-US&page=3";

    const {
        data: { results: movies },
    } = await api.get<MoviesData>(url);

    const moviesList = movies.map((movie) => (
        <MovieCard key={movie.id} title={movie.title} backdrop_path={movie.backdrop_path} />
    ));

    return <MoviesWrapper title="My List" moviesList={moviesList} />;
};
