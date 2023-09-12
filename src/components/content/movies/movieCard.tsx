"use client";

import { useState } from "react";

import Image from "next/image";

import { Party } from "./party";
import { ProgressBar } from "./progressBar";

export interface MovieCardProps {
    isParty?: boolean;
    progress?: number;
    backdrop_path: string;
}

export const MovieCard = ({ isParty = false, progress, backdrop_path }: MovieCardProps) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <div
            className="
                    flex
                    max-h-[180px]
                    min-h-[180px]
                    min-w-[300px]
                    max-w-[300px]
                    flex-col
                    items-center
                    justify-end
                    overflow-hidden
                    rounded-xl
                    bg-hover
                    md:max-h-[200px]
                    md:min-h-[200px]
                    md:min-w-[340px]
                    md:max-w-[340px]
                "
        >
            <Image
                src={`http://image.tmdb.org/t/p/original/${backdrop_path}`}
                alt={`movie.title`}
                width={300}
                height={180}
                priority
                onLoad={() => setIsImageLoaded(true)}
                className="
                        max-h-[180px]
                        min-h-[180px]
                        min-w-[300px]
                        max-w-[300px]
                        object-cover
                        md:max-h-[200px]
                        md:min-h-[200px]
                        md:min-w-[340px]
                        md:max-w-[340px]
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
                        md:max-h-[200px]
                        md:min-h-[200px]
                        md:min-w-[340px]
                        md:max-w-[340px]
                    "
                />
            )}
        </div>
    );
};
