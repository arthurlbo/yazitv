import { api } from "@/lib/api";

import { MoviesData } from "./movies/types";
import { MoviesSection } from "./movies/movies-section";

export interface Genre {
    id: number;
    name: string;
}

interface GenresData {
    genres: Genre[];
}

const url = "/discover/movie?include_adult=false&include_video=false&language=en-US&page=2";

/**
 * Section that displays the movies watched in party mode.
 */
export const PartiesSection = async () => {
    const {
        data: { results: movies },
    } = await api.get<MoviesData>(url);

    const {
        data: { genres },
    } = await api.get<GenresData>("/genre/movie/list?language=en");

    return <MoviesSection dataTestId="parties-section" title="Parties" moviesList={movies} genres={genres} isParty />;
};
