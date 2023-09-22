"use client";

import { useRef, useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { Genre, Movie } from "./types";

import { MovieCard } from "./movie-card";
import { WrapperButton } from "./wrapper-button";

interface MoviesWrapperProps {
    title: string;
    isParty: boolean;
    haveProgress: boolean;
    moviesList: Movie[];
    genres: Genre[];
}

const handleGenres = (genres: Genre[], genreIds: number[]) => {
    return genreIds.map((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
    });
};

/**
 * Component that wraps the movies list in a slider.
 * @param title - Title of the movies section.
 * @param moviesList - List of section's movies.
 * @param genres - List of movie's genres.
 * @param haveProgress - Flag that indicates if the movies card should show the progress bar.
 * @param isParty - Flag that indicates if the section is a party section.
 */
export const MoviesWrapper = ({ genres, haveProgress, isParty, moviesList, title }: MoviesWrapperProps) => {
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
                        progress={haveProgress ? Math.random() * 101 : undefined}
                    />
                ))}
            </div>
        </>
    );
};
