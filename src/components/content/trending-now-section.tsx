import { api } from "@/lib/api";

import { MoviesData } from "./movies/types";
import { MoviesSection } from "./movies/movies-section";

const url = "/trending/all/day?include_adult=false&include_video=false&language=en-US&page=1";

/**
 * Section that displays the trending movies.
 */
export const TrendingNowSection = async () => {
    const {
        data: { results: movies },
    } = await api.get<MoviesData>(url);

    return <MoviesSection dataTestId="trending-now-section" title="Trending Now" moviesList={movies} />;
};
