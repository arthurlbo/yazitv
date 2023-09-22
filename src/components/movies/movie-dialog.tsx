import { Info, Play, X } from "lucide-react";

import { MovieInformationProps } from "./movie-information";

import { ProgressBar } from "./progress-bar";
import { MovieBackdrop } from "./movie-backdrop";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type MovieDialogProps = MovieInformationProps;

export const MovieDialog = ({
    backdrop_path,
    isParty = false,
    overview,
    release_date,
    title,
    vote_average,
    vote_count,
    genres,
    progress,
}: MovieDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    className="
                        flex
                        items-center
                        justify-center
                        rounded-full
                        bg-transparent
                        p-2
                        outline-none
                        transition-all
                        duration-300
                        ease-in-out
                        hover:bg-slate-600
                        focus:ring-0
                    "
                >
                    <Info className=" h-5 w-5 text-primary transition-colors duration-200 ease-in-out" />
                </button>
            </DialogTrigger>
            <DialogContent className="flex h-2/3 w-full max-w-3xl flex-col items-start gap-3 overflow-x-hidden rounded-xl bg-background pb-3">
                <DialogClose asChild>
                    <button
                        className="
                            absolute
                            right-3
                            top-3
                            z-20
                            flex
                            h-9
                            w-9
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-full
                            bg-background/80
                            transition-all
                            duration-200
                            focus:outline-none
                            focus:ring-2
                            focus:ring-complementary/80
                            focus:ring-offset-2
                            focus:ring-offset-slate-400
                        "
                    >
                        <X className="h-5 w-5 text-primary" />
                    </button>
                </DialogClose>
                <div
                    className="
                        relative
                        h-96
                        w-full
                        after:absolute
                        after:-bottom-1
                        after:h-60
                        after:w-full
                        after:bg-gradient-to-t
                        after:from-background
                        after:to-transparent
                        after:content-['']
                    "
                >
                    <MovieBackdrop backdrop_path={backdrop_path} isInDialog={false} isParty={isParty} title={title} />
                    <button
                        className="
                            absolute
                            left-1/2
                            top-1/2
                            z-10
                            flex
                            h-14
                            w-14
                            -translate-x-1/2
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            bg-gradient-to-r
                            from-accent
                            to-complementary
                            transition-all
                            duration-300
                            hover:-translate-y-1/2
                            hover:shadow-xl
                            hover:shadow-complementary/50
                            focus:outline-none
                            focus:ring-2
                            focus:ring-complementary/80
                            focus:ring-offset-2
                            focus:ring-offset-hover/80
                        "
                    >
                        <Play className="h-7 w-7 fill-primary text-primary" />
                    </button>
                    {progress && <ProgressBar width="w-[100%]" progress={progress} />}
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-2 px-6">
                    <h1 className="text-xl font-bold text-primary">{title}</h1>
                    <p className="text-md font-normal text-secondary">{overview}</p>
                </div>
                <div className="flex flex-col items-start justify-start gap-2 px-6">
                    <div className="flex items-center gap-2 ">
                        <h1 className="text-md font-medium text-primary">Genres:</h1>
                        <p className="text-md font-medium text-secondary">{genres?.join(", ")}</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <h1 className="text-md font-medium text-primary">Release:</h1>
                        <p className="text-md font-medium text-secondary">{release_date}</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <h1 className="text-md font-medium text-primary">Votes:</h1>
                        <p className="text-md font-medium text-secondary">{vote_average}</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <h1 className="text-md font-medium text-primary">Votes count:</h1>
                        <p className="text-md font-medium text-secondary">{vote_count}</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
