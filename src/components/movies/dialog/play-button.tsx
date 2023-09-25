import { Play } from "lucide-react";

export const PlayButton = () => {
    return (
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
    );
};
