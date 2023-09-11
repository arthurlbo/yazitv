import { MovieCard } from "./movieCard";
import { MoviesWrapper } from "./movies/moviesWrapper";

export const TopPicksSection = async () => {
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

    return <MoviesWrapper title="Top Picks for Arthur" items={items} />;
};
