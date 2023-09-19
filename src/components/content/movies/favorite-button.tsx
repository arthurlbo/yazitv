"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

/**
 * Button for the user to add a movie to their favorites list.
 */
export const FavoriteButton = () => {
    const [isLiked, setIsLiked] = useState(false);

    return (
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
    );
};
