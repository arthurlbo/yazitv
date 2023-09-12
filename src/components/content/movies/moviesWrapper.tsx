"use client";

import { useRef, useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { WrapperButton } from "./wrapperButton";

interface MoviesWrapperProps {
    title: string;
    moviesList: JSX.Element[];
}

export const MoviesWrapper = ({ title, moviesList }: MoviesWrapperProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollByCards = (cards: number, direction: number) => {
        const scrollableContainer = containerRef.current;
        if (scrollableContainer) {
            const totalWidth = scrollableContainer.scrollWidth;
            const itemWidth = totalWidth / moviesList.length;
            const nextIndex = (currentIndex + cards + moviesList.length) % moviesList.length;
            let nextScrollLeft;

            if (direction === 1 && nextIndex !== 0) {
                const offset = 20;
                nextScrollLeft = nextIndex * itemWidth + offset;
            } else {
                nextScrollLeft = nextIndex * itemWidth;
            }

            scrollableContainer.scrollTo({
                left: nextScrollLeft,
            });

            setCurrentIndex(nextIndex);
        }
    };

    const handleNextClick = () => {
        scrollByCards(2, 1);
    };

    const handlePrevClick = () => {
        scrollByCards(-2, -1);
    };

    return (
        <div className="flex w-full flex-col items-start gap-8">
            <div className="flex w-full items-center justify-between">
                <h1 className="pl-1 text-xl font-semibold text-primary md:text-2xl">{title}</h1>
                <div className="hidden items-center gap-3 md:flex">
                    <WrapperButton icon={ArrowLeft} handleButtonClick={handlePrevClick} />
                    <WrapperButton icon={ArrowRight} handleButtonClick={handleNextClick} />
                </div>
            </div>
            <div
                ref={containerRef}
                className="flex w-full max-w-full items-center justify-between gap-5 overflow-x-scroll scrollbar-none"
                style={{ scrollBehavior: "smooth" }}
            >
                {moviesList}
            </div>
        </div>
    );
};
