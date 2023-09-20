import { api } from "@/lib/api";

import { MoviesData } from "./movies/types";
import { MoviesSection } from "./movies/movies-section";

const url = "/movie/upcoming?include_adult=false&include_video=false&language=en-US&page=1";

/**
 * Section that displays the newest movies and the movies that will be released.
 */
export const NewReleasesSection = async () => {
    const {
        data: { results: movies },
    } = await api.get<MoviesData>(url);

    return <MoviesSection dataTestId="new-releases-section" title="New Releases" moviesList={movies} />;
};
