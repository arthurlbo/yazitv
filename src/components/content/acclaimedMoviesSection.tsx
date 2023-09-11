import { MovieCard } from "./movieCard";
import { MoviesWrapper } from "./movies/moviesWrapper";

export const AcclaimedMoviesSection = async () => {
    const items = [
        <>
            <MovieCard isParty />
            <MovieCard progress={50} />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </>,
        <>
            <MovieCard />
            <MovieCard />
            <MovieCard isParty />
            <MovieCard progress={50} />
            <MovieCard />
        </>,
        <>
            <MovieCard />
            <MovieCard />
            <MovieCard isParty />
            <MovieCard progress={50} />
            <MovieCard />
        </>,
    ];

    return <MoviesWrapper title="Critically Acclaimed Movies" items={items} />;
};
