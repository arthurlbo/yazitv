"use client";

import { useRef, useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { Movie } from "./types";
import { Genre } from "../parties-section";

import { MovieCard } from "./movie-card";
import { WrapperButton } from "./wrapper-button";

interface MoviesSectionProps {
    dataTestId?: string;
    title: string;
    moviesList: Movie[];
    progress?: number;
    genres?: Genre[];
    isParty?: boolean;
}

const handleGenres = (genres: Genre[], genreIds: number[]) => {
    return genreIds.map((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
    });
};

/**
 * Component that wraps the movies list in a slider and separates them into sections.
 * @param title - Title of the movies list.
 * @param moviesList - Cards of movies.
 */
export const MoviesSection = ({
    dataTestId,
    title,
    moviesList,
    progress,
    genres = [],
    isParty = false,
}: MoviesSectionProps) => {
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
        <div data-testid={dataTestId || "movies-section"} className="flex w-full flex-col items-start gap-8">
            <div className="flex w-full items-center justify-between">
                <h1 data-testid="movies-section-title" className="pl-1 text-xl font-semibold text-primary md:text-2xl">
                    {title}
                </h1>
                <div className="hidden items-center gap-3 md:flex">
                    <WrapperButton dataTestId="next-button" icon={ArrowLeft} handleButtonClick={handlePrevClick} />
                    <WrapperButton dataTestId="previous-button" icon={ArrowRight} handleButtonClick={handleNextClick} />
                </div>
            </div>
            <div
                data-testid="movies-list"
                ref={containerRef}
                className="flex w-full max-w-full items-center justify-between gap-5 overflow-x-scroll scrollbar-none"
                style={{ scrollBehavior: "smooth" }}
            >
                {moviesList.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        backdrop_path={movie.backdrop_path}
                        isParty={isParty}
                        genres={handleGenres(genres, movie.genre_ids)}
                        progress={progress}
                    />
                ))}
            </div>
        </div>
    );
};
