import { api } from "@/lib/api";

import { MoviesData } from "@/utils/handleMovies";
import { chunkMovies, handleMovies } from "@/utils/handleMovies";

import { MoviesWrapper } from "./movies/moviesWrapper";

export const ContinueWatchingSection = async () => {
    const {
        data: { results: movies },
    } = await api.get<MoviesData>("/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1");

    const chunkedMovies = chunkMovies(movies, 5);

    const handledMovies = handleMovies(chunkedMovies);

    return <MoviesWrapper title="Continue Watching" items={handledMovies} />;
};
