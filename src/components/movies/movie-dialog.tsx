import { ReactElement } from "react";

import Image from "next/image";

import { X } from "lucide-react";

import { InfoButtonProps } from "./info-button";

import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ProgressBar } from "./progress-bar";

interface MovieDialogProps extends InfoButtonProps {
    MovieDialogTrigger: ReactElement;
}

export const MovieDialog = ({
    MovieDialogTrigger,
    genres,
    imgSrc,
    isParty,
    overview,
    release_data,
    title,
    vote_average,
    vote_count,
    progress,
}: MovieDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{MovieDialogTrigger}</DialogTrigger>
            <DialogContent className="flex w-full max-w-lg flex-col items-start gap-4 overflow-x-hidden rounded-xl bg-hover">
                <DialogClose asChild>
                    <button
                        className="
                            absolute
                            right-3
                            top-2
                            z-20
                            flex
                            h-10
                            w-10
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-full
                            bg-transparent
                            outline-none
                            transition-all
                            duration-200
                            hover:bg-background/80
                            focus:ring-0
                        "
                    >
                        <X className="h-5 w-5 text-primary" />
                    </button>
                </DialogClose>
                <div className="relative h-48 w-full">
                    <Image src={imgSrc} alt={title || "Movie"} priority fill sizes="100%" />
                    {progress && <ProgressBar progress={progress} />}
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-2 px-4">
                    <h1 className="text-lg font-bold text-primary">{title}</h1>
                    <p className="text-sm font-medium text-secondary">{overview}</p>
                </div>
            </DialogContent>
        </Dialog>
    );
};
