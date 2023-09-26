import { Play } from "lucide-react";

import { cva } from "class-variance-authority";

import { cn } from "@/utils/shadcn";

interface PlayButtonProps {
    variant: "default" | "dialog";
}

/**
 * Button for the user starts a movie.
 * @param variant - The button's style variant.
 */
export const PlayButton = ({ variant }: PlayButtonProps) => {
    const playButtonVariants = cva(
        "flex z-10 items-center justify-center rounded-full items-center justify-center rounded-full bg-gradient-to-r  from-accent to-complementary transition-all duration-300 hover:shadow-xl hover:shadow-complementary/50 focus:outline-none focus:ring-2 focus:ring-complementary/80 focus:ring-offset-2 focus:ring-offset-hover/80",
        {
            variants: {
                variant: {
                    dialog: "h-14 w-14 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:-translate-y-1/2",
                    default: "hover:-translate-y-1 h-11 w-11",
                },
            },
            defaultVariants: {
                variant: "default",
            },
        },
    );

    return (
        <button className={cn(playButtonVariants({ variant }))}>
            <Play
                className={`
                    ${variant === "default" ? "h-5 w-5" : "h-7 w-7"}
                    fill-primary
                    text-primary
                `}
            />
        </button>
    );
};
