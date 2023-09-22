"use client";

import { useState } from "react";

import Image from "next/image";

import { Party } from "./party";
import { Skeleton } from "./skeleton";
import { ProgressBar } from "./progress-bar";
import { MovieInformation } from "./movie-information";

export interface MovieCardProps {
    title: string;
    backdrop_path: string;
    genres?: string[];
    progress?: number;
    isParty?: boolean;
}

/**
 * Movie Card Component
 * @param title - Title of the movie.
 * @param backdrop_path - Cover of the movie.
 * @param genres - Genres of the movie.
 * @param isParty - Indicates if the movie was watched in the party mode.
 * @param progress - Indicates the progress of the movie if was watched.
 */
export const MovieCard = ({ title, backdrop_path, genres = [], isParty = false, progress }: MovieCardProps) => {
    const defaultImgUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

    const [imgSrc, setImgSrc] = useState(defaultImgUrl);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    const showChildren = isImageLoaded && imgSrc === defaultImgUrl;

    return (
        <div
            className="
                group
                relative
                flex
                max-h-[170px]
                min-h-[170px]
                min-w-[290px]
                max-w-[290px]
                cursor-pointer
                flex-col
                items-center
                justify-end
                overflow-hidden
                rounded-xl
                transition-all
                duration-300
                ease-in-out
                md:max-h-[180px]
                md:min-h-[180px]
                md:min-w-[300px]
                md:max-w-[300px]
                xl:max-h-[190px]
                xl:min-h-[190px]
                xl:min-w-[320px]
                xl:max-w-[320px]
                2xl:max-h-[200px]
                2xl:min-h-[200px]
                2xl:min-w-[340px]
                2xl:max-w-[340px]
            "
        >
            <Image
                src={imgSrc}
                alt={title || "Movie"}
                priority
                onLoad={handleImageLoad}
                fill
                sizes="(min-width: 768px) 300px, (min-width: 1280px) 320px, (min-width: 1536px) 340px, 290px"
                onError={() => setImgSrc("/notFound.svg")}
                className={`
                    transition-all
                    duration-300
                    ${isParty ? "rounded-b-xl" : "rounded-b-none"}
                    ${!isImageLoaded ? "hidden" : "flex"}
                    ease-in-out
                    group-hover:scale-105
                    group-hover:opacity-20
                `}
            />

            <MovieInformation title={title} isParty={isParty} progress={progress} />

            {progress && showChildren && <ProgressBar progress={progress} />}

            {isParty && showChildren && <Party title={title} genres={genres} />}

            {!isImageLoaded && <Skeleton />}
        </div>
    );
};
