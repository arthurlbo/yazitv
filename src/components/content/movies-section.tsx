import { api } from "@/lib/api";
import { GenresData, MoviesData } from "../movies/types";

import { MoviesWrapper } from "../movies/movies-wrapper";

interface MoviesSectionProps {
    id: string;
    title: string;
    apiUrl: string;
    haveProgress?: boolean;
    isParty?: boolean;
}

/**
 * Component that separate the movies into sections.
 * @param id - Id of the movies section.
 * @param title - Title of the movies section.
 * @param apiUrl - Api url to get the movies list.
 * @param haveProgress - Flag that indicates if the movies card should show the progress bar.
 * @param isParty - Flag that indicates if the section is a party section.
 */
export const MoviesSection = async ({
    id,
    title,
    apiUrl,
    haveProgress = false,
    isParty = false,
}: MoviesSectionProps) => {
    const {
        data: { results: movies },
    } = await api.get<MoviesData>(apiUrl);

    const {
        data: { genres },
    } = await api.get<GenresData>("/genre/movie/list?language=en");

    return (
        <div data-testid={id || "movies-section"} className="flex w-full flex-col items-start gap-8">
            <MoviesWrapper
                genres={genres}
                haveProgress={haveProgress}
                isParty={isParty}
                moviesList={movies}
                title={title}
            />
        </div>
    );
};
