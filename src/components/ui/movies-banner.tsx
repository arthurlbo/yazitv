"use client";

import { useState } from "react";

import Image from "next/image";

import Banner from "@/assets/banner.svg";

/**
 * Movies banner that will be displayed in the page's Hero.
 */
export const MoviesBanner = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <>
            <Image
                src={Banner}
                alt="movies"
                height={410}
                priority
                onLoad={handleImageLoad}
                className={`w-full ${!isImageLoaded ? "hidden" : "flex"}`}
            />

            {!isImageLoaded && (
                <div
                    data-testid="banner-skeleton"
                    className="
                        h-[410px]
                        w-full
                        animate-pulse
                        rounded-xl
                        bg-slate-600
                        lg:h-[352px]
                        xl:h-[410px]
                    "
                />
            )}
        </>
    );
};
