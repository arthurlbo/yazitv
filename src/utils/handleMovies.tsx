import { MovieCard } from "@/components/content/movies/movieCard";

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MoviesData {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

/**
 * Function to split movies list into subarrays of 5 elements
 * @param moviesList - List of movies
 * @param chunkSize - Size of the subarrays
 * @returns list of subarrays of movies
 */
export const chunkMovies = (moviesList: Movie[], chunkSize: number) => {
    const chunkedMovies: Movie[][] = [];
    const movieCount = moviesList.length;

    for (let i = 0; i < movieCount; i += chunkSize - 1) {
        const endIndex = Math.min(i + chunkSize, movieCount);
        const chunkedMovie = moviesList.slice(i, endIndex);
        chunkedMovies.push(chunkedMovie);
    }

    if (chunkedMovies.length > 1) {
        const lastChunk = chunkedMovies[chunkedMovies.length - 1];
        const firstChunk = chunkedMovies[0];
        lastChunk.push(firstChunk[0]);
    }

    return chunkedMovies;
};

/**
 * Function to format the movie list into a list of MovieCard components.
 * @param chunkedMovies - list of subarrays of movies
 * @returns list of MovieCard components
 */
export const handleMovies = (chunkedMovies: Movie[][], haveProgress: boolean) => {
    const handledMovies = chunkedMovies.map((moviesList) => (
        <>
            {moviesList.map((movie) => (
                <MovieCard
                    key={movie.id}
                    backdrop_path={movie.backdrop_path}
                    progress={haveProgress ? Math.random() * 101 : undefined}
                />
            ))}
        </>
    ));
    return handledMovies;
};
