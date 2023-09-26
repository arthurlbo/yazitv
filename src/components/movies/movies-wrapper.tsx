"use client";

import { ReactNode, useRef, useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { Movie } from "./types";

import { IconButton } from "@/components/ui/icon-button";

interface MoviesWrapperProps {
    sectionTitle: string;
    moviesList: Movie[];
    children: ReactNode;
}

/**
 * Component that wraps the movies list in a slider.
 * @param title - Title of the movies section.
 * @param children - Children components(MovieCard) that will be wrapped in a Slider.
 * @param moviesList - List of section's movies.
 */
export const MoviesWrapper = ({ children, moviesList, sectionTitle }: MoviesWrapperProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    /**
     * Function that scrolls the movies list.
     * @param cards - Number of cards to scroll.
     * @param direction - Direction to scroll.
     */
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
        <>
            <div className="flex w-full items-center justify-between">
                <h1 data-testid="movies-section-title" className="pl-1 text-xl font-semibold text-primary md:text-2xl">
                    {sectionTitle}
                </h1>
                <div className="hidden items-center gap-3 md:flex">
                    <IconButton dataTestId="next-button" icon={ArrowLeft} handleButtonClick={handlePrevClick} />
                    <IconButton dataTestId="previous-button" icon={ArrowRight} handleButtonClick={handleNextClick} />
                </div>
            </div>
            <div
                ref={containerRef}
                data-testid="movies-list"
                className="flex w-full max-w-full items-center justify-between gap-5 overflow-x-scroll scrollbar-none"
                style={{ scrollBehavior: "smooth" }}
            >
                {children}
            </div>
        </>
    );
};
