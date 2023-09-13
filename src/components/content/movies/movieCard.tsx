"use client";

import { useState } from "react";

import Image from "next/image";

import { Party } from "./party";
import { ProgressBar } from "./progressBar";
export interface MovieCardProps {
    isParty?: boolean;
    progress?: number;
    title: string;
    backdrop_path: string;
    genres?: string[];
}

export const MovieCard = ({ isParty = false, progress, backdrop_path, title, genres = [] }: MovieCardProps) => {
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
                    bg-hover
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
                alt={title}
                width={290}
                height={170}
                priority
                onLoad={handleImageLoad}
                onError={() => setImgSrc("/notFound.svg")}
                className="
                        max-h-[170px]
                        min-h-[170px]
                        min-w-[290px]
                        max-w-[290px]
                        object-cover
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
            />

            {progress && showChildren && <ProgressBar progress={progress} />}

            {isParty && showChildren && <Party title={title} genres={genres} />}

            {!isImageLoaded && (
                <div
                    className="
                        max-h-[170px]
                        min-h-[170px]
                        min-w-[290px]
                        max-w-[290px]
                        animate-pulse
                        bg-slate-600
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
                />
            )}
        </div>
    );
};
