import { ReactNode } from "react";

import { PlayButton } from "./play-button";
import { FavoriteButton } from "./favorite-button";

export type MovieInformationProps = {
    title: string;
    progress?: number;
    isParty?: boolean;
    children: ReactNode;
};

/**
 * Component that displays information about a movie on movie card hover.
 * @param title - Movie's title.
 * @param children - Children's component(Dialog) that will display more information about the movie.
 * @param progress - Indicates the progress of the movie if was watched.
 * @param isParty - Indicates if the movie was watched in the party mode.
 */
export const MovieInformation = ({ title, isParty, progress, children }: MovieInformationProps) => {
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
                    {title ?? "Title not provided"}
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
                    {children}
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
