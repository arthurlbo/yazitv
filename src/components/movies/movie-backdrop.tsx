"use client";

import { useState } from "react";

import Image from "next/image";

interface MovieBackdropProps {
    backdrop_path: string;
    title: string;
    isParty: boolean;
    isInDialog: boolean;
}

/**
 * Skeleton to show while the image is loading.
 */
const Skeleton = () => {
    return (
        <div data-testid="movie-skeleton" className="z-50 h-full w-full bg-background">
            <div className="h-full w-full animate-pulse bg-slate-600" />
        </div>
    );
};

/**
 * Component that display the movie's backdrop image.
 * @param backdrop_path - The path to the movie's backdrop image.
 * @param title - Movie's title.
 * @param isParty - Indicates if the movie was watched in party mode.
 * @param isInDialog - Indicates if the movie is being shown in the dialog (true) or in the card (false).
 */
export const MovieBackdrop = ({ backdrop_path, title, isParty, isInDialog }: MovieBackdropProps) => {
    const defaultImgUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

    const [imgSrc, setImgSrc] = useState(defaultImgUrl);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    const variantClasses = isInDialog
        ? ""
        : `group-hover:scale-105 group-hover:opacity-20 ${isParty ? "rounded-b-xl" : "rounded-b-none"}`;

    return (
        <>
            <Image
                src={imgSrc}
                alt={title || "Movie"}
                priority
                onLoad={handleImageLoad}
                fill
                sizes="full"
                onError={() => setImgSrc("/notFound.svg")}
                className={`
                    ${!isImageLoaded ? "hidden" : "flex"}
                    ${variantClasses}
                    transition-all
                    duration-300
                    ease-in-out
                `}
            />

            {!isImageLoaded && <Skeleton />}
        </>
    );
};
