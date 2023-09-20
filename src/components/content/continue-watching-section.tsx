import { api } from "@/lib/api";

import { MoviesData } from "./movies/types";
import { MoviesSection } from "./movies/movies-section";

const url = "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1";

/**
 * Section that displays the movies watched and stopped by the user.
 */
export const ContinueWatchingSection = async () => {
    const {
        data: { results: movies },
    } = await api.get<MoviesData>(url);

    return (
        <MoviesSection
            dataTestId="continue-watching-section"
            title="Continue Watching"
            moviesList={movies}
            progress={Math.random() * 101}
        />
    );
};
