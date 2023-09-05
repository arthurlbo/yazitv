import Image from "next/image";

import { Play, ArrowRight } from "lucide-react";

import Movies from "@/assets/banner.webp";

export const Hero = () => {
    return (
        <div className="flex w-full flex-col items-start justify-center gap-11 py-5">
            <div className="flex w-full flex-col items-start gap-3">
                <h2 className="text-base font-bold text-secondary">Discover, Watch, Repeat!</h2>
                <h1 className="text-2xl font-extrabold text-primary">Good nigth Arthur 👋</h1>
                <p className="text-base font-medium leading-relaxed tracking-wide text-secondary">
                    Immerse Yourself in Infinite Entertainment on Yazi.tv! Explore a Universe of Movies, Series, and
                    More. Your Ultimate Streaming Destination Awaits!
                </p>
            </div>
            <div className="flex max-h-[270px] max-w-[full] items-center justify-center overflow-clip">
                <Image
                    src={Movies}
                    alt="movies"
                    priority
                    placeholder="blur"
                    className="h-[550px] w-[522px] object-cover"
                />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-3">
                <button className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-accent to-complementary py-3">
                    <Play className="h-6 w-6 fill-primary text-primary" />
                    <span className="text-base font-bold text-primary">Start Now</span>
                </button>
                <button className="flex w-full items-center justify-center gap-1 bg-transparent py-3">
                    <span className="text-sm font-bold text-secondary">Go to My List</span>
                    <ArrowRight className="h-5 w-5 text-secondary" />
                </button>
            </div>
        </div>
    );
};
