"use client";

import { useState } from "react";

import { Heart } from "lucide-react";
import { cva } from "class-variance-authority";

import { cn } from "@/utils/shadcn";

import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { TooltipContent } from "./tooltip-content";

interface FavoriteButtonProps {
    variant: "iconButton" | "default";
}

/**
 * Button for the user to add a movie to their favorites list.
 * @param variant - The button's style variant.
 */
export const FavoriteButton = ({ variant }: FavoriteButtonProps) => {
    const [isLiked, setIsLiked] = useState(false);

    const favoriteButtonVariants = cva(
        "flex items-center justify-center rounded-full p-2 outline-none bg-transparent transition-all duration-300 ease-in-out focus:ring-0",
        {
            variants: {
                variant: {
                    iconButton: "h-11 w-11 border border-hover hover:border-tertiary hover:-translate-y-1",
                    default: "border-none  hover:bg-slate-600",
                },
            },
            defaultVariants: {
                variant: "default",
            },
        },
    );

    return (
        <TooltipProvider>
            <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                    <button className={cn(favoriteButtonVariants({ variant }))} onClick={() => setIsLiked(!isLiked)}>
                        <Heart
                            className={`
                                h-5
                                w-5
                                ${isLiked ? "text-red-500" : "text-primary"}
                                ${isLiked ? "fill-red-500" : "fill-none"}
                                transition-colors
                                duration-200
                                ease-in-out
                            `}
                        />
                    </button>
                </TooltipTrigger>
                <TooltipContent text="Add to My List" />
            </Tooltip>
        </TooltipProvider>
    );
};
