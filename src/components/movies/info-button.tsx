import { Info } from "lucide-react";

import { MovieDialog } from "./movie-dialog";

export interface InfoButtonProps {
    title: string;
    isParty: boolean;
    progress?: number;
    imgSrc: string;
    genres: string[];
    overview: string;
    release_data: string;
    vote_average: number;
    vote_count: number;
}

export const InfoButton = ({
    genres,
    imgSrc,
    isParty,
    overview,
    release_data,
    title,
    vote_average,
    vote_count,
    progress,
}: InfoButtonProps) => {
    return (
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
    );
};

/*

return (
        <MovieDialog
            MovieDialogTrigger={
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
            }
            genres={genres}
            imgSrc={imgSrc}
            isParty={isParty}
            overview={overview}
            release_data={release_data}
            title={title}
            vote_average={vote_average}
            vote_count={vote_count}
            progress={progress}
        />
    );
*/
