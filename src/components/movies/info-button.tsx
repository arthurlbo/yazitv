import { Info } from "lucide-react";

export const InfoButton = () => {
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
