import { api } from "@/lib/api";

import { MoviesData } from "./movies/types";
import { MoviesSection } from "./movies/movies-section";

const url = "/discover/movie?include_adult=false&include_video=false&language=en-US&page=3";

/**
 * Section that displays the movies saved in the user's list.
 */
export const MyListSection = async () => {
    const {
        data: { results: movies },
    } = await api.get<MoviesData>(url);

    return <MoviesSection dataTestId="my-list-section" title="My List" moviesList={movies} />;
};
