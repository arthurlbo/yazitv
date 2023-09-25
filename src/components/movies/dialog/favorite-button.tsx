"use client";

import { useState } from "react";

import { Heart } from "lucide-react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

/**
 * Button for the user to add a movie to their favorites list.
 */
export const FavoriteButton = () => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <TooltipProvider>
            <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                    <button
                        className="
                            relative
                            flex
                            h-11
                            w-11
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-hover
                            bg-background
                            outline-none
                            transition-all
                            duration-200
                            hover:-translate-y-1
                            hover:border-tertiary
                            focus:ring-0
                        "
                        onClick={() => setIsLiked(!isLiked)}
                    >
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
                <TooltipContent>
                    <span className="text-sm font-normal text-primary">Add to My List</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
