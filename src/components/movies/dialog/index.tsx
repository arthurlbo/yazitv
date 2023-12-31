import { Download, PartyPopper, Star } from "lucide-react";

import { CloseButton } from "./close-button";
import { TriggerButton } from "./trigger-button";
import { TooltipButton } from "./tooltip-button";

import { PlayButton } from "../play-button";
import { ProgressBar } from "../progress-bar";
import { MovieBackdrop } from "../movie-backdrop";
import { FavoriteButton } from "../favorite-button";

import { Dialog, DialogContent } from "@/components/ui/dialog";

interface MovieDialogProps {
    backdrop_path: string;
    isParty?: boolean;
    overview: string;
    release_date: string;
    title: string;
    vote_average: number;
    genres: string[];
    progress?: number;
}

/**
 * Dialog that shows the movie information.
 * @param backdrop_path - Path to the movie's cover.
 * @param isParty - Indicates if the movie was watched in the party mode.
 * @param overview - Movie's overview.
 * @param release_date - Movies's release date.
 * @param title - Movie's title.
 * @param vote_average - Movie's vote average.
 * @param genres - Movie's genres.
 * @param progress - Indicates the progress of the movie if was watched.
 */
export const MovieDialog = ({
    backdrop_path,
    isParty = false,
    overview,
    release_date,
    title,
    vote_average,
    genres,
    progress,
}: MovieDialogProps) => {
    const releaseYear = release_date?.split("-")[0];

    return (
        <Dialog>
            <TriggerButton />
            <DialogContent
                className="
                    flex
                    h-auto
                    w-full
                    max-w-3xl
                    flex-col
                    items-start
                    justify-between
                    gap-6
                    overflow-x-hidden
                    rounded-xl
                    bg-background
                    pb-6
                "
            >
                <CloseButton />
                <div
                    className="
                        relative
                        h-64
                        w-full
                        after:absolute
                        after:-bottom-1
                        after:h-60
                        after:w-full
                        after:bg-gradient-to-t
                        after:from-background
                        after:to-transparent
                        after:content-['']
                        md:h-80
                        massive:h-96
                    "
                >
                    <MovieBackdrop backdrop_path={backdrop_path} isInDialog={false} isParty={isParty} title={title} />
                    <PlayButton variant="dialog" />
                    {progress && <ProgressBar width="w-[100%]" progress={progress} />}
                </div>
                <div className="relative flex w-full flex-col items-start gap-6">
                    <div className="absolute right-6 top-0 flex items-center gap-3">
                        <FavoriteButton variant="iconButton" />
                        <TooltipButton icon={PartyPopper} text="Watch in Party" />
                        <TooltipButton icon={Download} text="Download" />
                    </div>
                    <div className="flex w-full flex-col items-start justify-start gap-4 px-6">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-normal text-secondary">
                                    {parseFloat(vote_average.toFixed(1))}
                                </span>
                            </div>
                            <span className="text-sm font-normal text-hover">|</span>
                            <span className="text-sm font-normal text-secondary">{releaseYear ?? "date"}</span>
                        </div>
                        <h1 className="w-60 text-xl font-bold text-primary md:w-[550px]">
                            {title ?? "Title not provided"}
                        </h1>
                        <p className="text-md font-normal text-secondary">{overview ?? "Overview not provided"}</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 px-6 md:flex-row md:items-center">
                        <h1 className="text-md font-medium text-primary">Genres:</h1>
                        <p className="text-md font-medium text-secondary">{genres?.join(", ")}</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
