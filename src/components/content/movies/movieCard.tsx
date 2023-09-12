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
}

export const MovieCard = ({ isParty = false, progress, backdrop_path, title }: MovieCardProps) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const imageSrc = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <div
            className="
                    flex
                    max-h-[180px]
                    min-h-[180px]
                    min-w-[300px]
                    max-w-[300px]
                    cursor-pointer
                    flex-col
                    items-center
                    justify-end
                    overflow-hidden
                    rounded-xl
                    bg-hover
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
                src={imageSrc}
                alt={title}
                width={300}
                height={180}
                priority
                onLoad={handleImageLoad}
                className="
                        max-h-[180px]
                        min-h-[180px]
                        min-w-[300px]
                        max-w-[300px]
                        object-cover
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

            {progress && <ProgressBar progress={progress} />}

            {isParty && <Party title="Spider Man" genre={["Comedy", "Drama"]} />}

            {!isImageLoaded && (
                <div
                    className="
                        z-20
                        max-h-[180px]
                        min-h-[180px]
                        min-w-[300px]
                        max-w-[300px]
                        animate-pulse
                        bg-slate-600
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
