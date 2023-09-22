import { Play } from "lucide-react";

import { InfoButton } from "./info-button";
import { FavoriteButton } from "./favorite-button";

interface MovieInformationProps {
    title: string;
    isParty: boolean;
    progress?: number;
}

/**
 * Component that displays information about a movie on movie card hover.
 * @param title - Title of the movie.
 * @param isParty - Indicates if the movie was watched in the party mode.
 * @param isProgress - Indicates if the movie was watched.
 */
export const MovieInformation = ({ title, isParty, progress }: MovieInformationProps) => {
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
                    <InfoButton />
                    <FavoriteButton />
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
                <button
                    className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-r
                        from-accent
                        to-complementary
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                        hover:shadow-complementary/50
                        focus:outline-none
                        focus:ring-2
                        focus:ring-complementary/80
                        focus:ring-offset-2
                        focus:ring-offset-hover/80
                    "
                >
                    <Play className="h-5 w-5 fill-primary text-primary" />
                </button>
            </div>
        </div>
    );
};
