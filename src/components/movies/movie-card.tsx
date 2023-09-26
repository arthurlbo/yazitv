import { Party } from "./party";
import { ProgressBar } from "./progress-bar";
import { MovieBackdrop } from "./movie-backdrop";
import { MovieInformation } from "./movie-information";

export interface MovieCardProps {
    title: string;
    overview: string;
    backdrop_path: string;
    genres?: string[];
    progress?: number;
    isParty?: boolean;
    release_date: string;
    vote_average: number;
}

/**
 * Movie Card Component
 * @param backdrop_path - Path to the movie's cover.
 * @param isParty - Indicates if the movie was watched in the party mode.
 * @param overview - Movie's overview.
 * @param release_date - Movies's release date.
 * @param title - Movie's title.
 * @param vote_average - Movie's vote average.
 * @param genres - Movie's genres.
 * @param progress - Indicates the progress of the movie if was watched.
 */
export const MovieCard = ({
    title,
    backdrop_path,
    genres = [],
    isParty = false,
    progress,
    overview,
    release_date,
    vote_average,
}: MovieCardProps) => {
    return (
        <div
            className="
                group
                relative
                flex
                h-[170px]
                max-h-[170px]
                min-w-[290px]
                max-w-[290px]
                cursor-pointer
                flex-col
                items-center
                justify-end
                overflow-hidden
                rounded-xl
                transition-all
                duration-300
                ease-in-out
                md:h-[180px]
                md:max-h-[180px]
                md:min-w-[300px]
                md:max-w-[300px]
                xl:h-[190px]
                xl:max-h-[190px]
                xl:min-w-[320px]
                xl:max-w-[320px]
                2xl:h-[200px]
                2xl:max-h-[200px]
                2xl:min-w-[340px]
                2xl:max-w-[340px]
            "
        >
            <MovieInformation
                title={title}
                isParty={isParty}
                progress={progress}
                genres={genres}
                backdrop_path={backdrop_path}
                overview={overview}
                release_date={release_date}
                vote_average={vote_average}
            />

            <MovieBackdrop backdrop_path={backdrop_path} isInDialog={false} isParty={isParty} title={title} />

            {progress && <ProgressBar width="w-[90%]" progress={progress} />}

            {isParty && <Party title={title} genres={genres} />}
        </div>
    );
};
