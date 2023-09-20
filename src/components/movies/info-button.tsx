import { Info } from "lucide-react";
import { MovieDialog } from "./movie-dialog";

export const InfoButton = () => {
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
            }
        />
    );
};
