import { Info, Play } from "lucide-react";
import { FavoriteButton } from "./favorite-button";

interface MovieInformationProps {
    title: string;
    isParty: boolean;
    isProgress: boolean;
}

/**
 * Component that displays information about a movie on movie card hover.
 * @param title - Title of the movie.
 * @param isParty - Indicates if the movie was watched in the party mode.
 * @param isProgress - Indicates if the movie was watched.
 */
export const MovieInformation = ({ title, isParty, isProgress }: MovieInformationProps) => {
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
            {isParty ? (
                <div className="absolute right-3 top-2">
                    <FavoriteButton />
                </div>
            ) : (
                <div className="flex w-full items-center justify-between bg-hover/95 px-4 py-1.5">
                    <h1 className="line-clamp-1 w-72 text-sm font-bold text-primary">{title ?? "Uninformed"}</h1>
                    <div className="flex items-center">
                        <button
                            className="
                            flex
                            items-center
                            justify-center
                            rounded-full
                            bg-transparent
                            p-2
                            transition-all
                            duration-300
                            ease-in-out
                            hover:bg-slate-600
                            focus:outline-none
                            focus:ring-2
                            focus:ring-complementary/80
                            focus:ring-offset-2
                            focus:ring-offset-hover/70
                        "
                        >
                            <Info className=" h-5 w-5 text-primary transition-colors duration-200 ease-in-out" />
                        </button>
                        <FavoriteButton />
                    </div>
                </div>
            )}

            <div
                className={`
                    flex
                    ${
                        isParty
                            ? "h-[calc(100%-60px)] xl:h-[calc(100%-70px)] "
                            : isProgress
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
