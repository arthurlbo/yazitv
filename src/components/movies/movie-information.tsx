import { MovieCardProps } from "./movie-card";

import { MovieDialog } from "./dialog";
import { PlayButton } from "./play-button";
import { FavoriteButton } from "./favorite-button";

export type MovieInformationProps = MovieCardProps;

/**
 * Component that displays information about a movie on movie card hover.
 * @param backdrop_path - Path to the movie's cover.
 * @param isParty - Indicates if the movie was watched in the party mode.
 * @param overview - Movie's overview.
 * @param release_date - Movies's release date.
 * @param title - Movie's title.
 * @param vote_average - Movie's vote average.
 * @param genres - Movie's genres.
 * @param progress - Indicates the progress of the movie if was watched.
 */
export const MovieInformation = ({
    title,
    isParty,
    progress,
    backdrop_path,
    overview,
    release_date,
    vote_average,
    genres,
}: MovieInformationProps) => {
    return (
        <div
            className="
                absolute
                left-0
                top-0
                z-20
                flex
                h-full
                w-full
                flex-col
                items-center
                justify-between
                opacity-0
                transition-opacity
                duration-300
                ease-in-out
                group-hover:opacity-100
            "
        >
            <div
                className={`
                    flex
                    ${isParty ? "absolute" : "static"}
                    ${isParty ? "bg-transparent" : "bg-hover/80"}
                    ${isParty ? "py-0" : "py-1.5"}
                    ${isParty ? "px-0" : "px-4"}
                    top-0
                    w-full
                    items-center
                    justify-between
                `}
            >
                <h1
                    className={`
                        ${isParty ? "hidden" : "static"}
                        line-clamp-1
                        w-72
                        text-sm
                        font-bold
                        text-primary
                    `}
                >
                    {title ?? "Uninformed"}
                </h1>
                <div
                    className={`
                        ${isParty ? "absolute" : "static"}
                        right-3
                        top-2
                        flex
                        items-center
                    `}
                >
                    <MovieDialog
                        backdrop_path={backdrop_path}
                        title={title || "Uninformed"}
                        overview={overview || "Uninformed"}
                        release_date={release_date}
                        vote_average={vote_average}
                        genres={genres}
                        isParty={isParty}
                        progress={progress}
                    />
                    <FavoriteButton variant="default" />
                </div>
            </div>

            <div
                className={`
                    flex
                    ${
                        isParty
                            ? "h-[calc(100%-60px)] xl:h-[calc(100%-70px)] "
                            : progress
                            ? "h-[calc(100%-1px)]"
                            : "h-full"
                    }
                    flex-col
                    items-center
                    justify-center
                `}
            >
                <PlayButton variant="default" />
            </div>
        </div>
    );
};
