import { api } from "@/lib/api";

import { MoviesData } from "./movies/types";
import { MoviesSection } from "./movies/movies-section";

const url = "/movie/top_rated?include_adult=false&include_video=false&language=en-US&page=2";

/**
 * Section that displays the top picks movies for the user.
 */
export const TopPicksSection = async () => {
    const {
        data: { results: movies },
    } = await api.get<MoviesData>(url);

    return <MoviesSection dataTestId="top-picks-section" title="Top Picks for Arthur" moviesList={movies} />;
};
