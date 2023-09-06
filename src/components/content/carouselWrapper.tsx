"use client";

import { useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { CarouselButton } from "./carouselButton";

interface CarouselWrapperProps {
    title: string;
    items: JSX.Element[];
}

export const CarouselWrapper = ({ title, items }: CarouselWrapperProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="flex w-full flex-col items-start gap-8">
            <div className="flex w-full items-center justify-between">
                <h1 className="pl-1 text-2xl font-semibold text-primary">{title}</h1>
                <div className="flex items-center gap-3">
                    <CarouselButton icon={ArrowLeft} handleButtonClick={prevSlide} />
                    <CarouselButton icon={ArrowRight} handleButtonClick={nextSlide} />
                </div>
            </div>
            <div className="relative flex w-full max-w-full items-center gap-5 overflow-x-hidden">
                {items[currentIndex]}
            </div>
        </div>
    );
};
