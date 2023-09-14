import { Play, ArrowRight } from "lucide-react";

import { MoviesBanner } from "../ui/movies-banner";

type DayPeriods = "morning" | "afternoon" | "night";

const handleWelcomeText: { [key in DayPeriods]: string } = {
    morning: "Good morning",
    afternoon: "Good afternoon",
    night: "Good night",
};

/**
 * Page's hero component.
 */
export const Hero = () => {
    const hours = new Date().getHours();

    const dayPeriod = hours < 12 ? "morning" : hours < 18 ? "afternoon" : "night";

    const welcomeText = handleWelcomeText[dayPeriod];

    return (
        <div
            data-testid="hero"
            className="flex w-full flex-col items-start justify-center lg:flex-row lg:items-center lg:justify-between"
        >
            <div className="flex w-full max-w-full flex-col justify-center gap-11 lg:max-w-md lg:gap-12">
                <div className="flex w-full flex-col items-start gap-3 lg:gap-7">
                    <h2 className="text-base font-bold text-secondary lg:text-xl">Discover, Watch, Repeat!</h2>
                    <h1 className="text-2xl font-extrabold text-primary lg:text-3xl">{`${welcomeText} Arthur 👋`}</h1>
                    <p className="text-base font-medium leading-relaxed tracking-wide text-secondary">
                        Immerse Yourself in Infinite Entertainment on Yazi.tv! Explore a Universe of Movies, Series, and
                        More. Your Ultimate Streaming Destination Awaits!
                    </p>
                </div>
                <div className="flex max-h-[270px] max-w-[full] items-center justify-center overflow-clip rounded-xl lg:hidden">
                    <MoviesBanner />
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-3 lg:flex-row lg:justify-start">
                    <button
                        className="
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-3
                            rounded-full
                            bg-gradient-to-r
                            from-accent
                            to-complementary
                            py-3
                            transition-all
                            duration-300
                            hover:scale-[1.02]
                            hover:shadow-lg
                            hover:shadow-complementary/30
                            focus:outline-none
                            focus:ring-2
                            focus:ring-complementary/80
                            focus:ring-offset-2
                            focus:ring-offset-background
                            lg:w-64
                        "
                    >
                        <Play className="h-6 w-6 fill-primary text-primary" />
                        <span className="text-base font-bold text-primary">Start Now</span>
                    </button>
                    <button
                        className="
                            group
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-1
                            rounded-full
                            bg-transparent
                            py-3
                            focus:outline-none
                            focus:ring-2
                            focus:ring-complementary/80
                            focus:ring-offset-2
                            focus:ring-offset-background
                            lg:w-36
                        "
                    >
                        <span className="text-sm font-bold text-secondary transition-opacity duration-300 group-hover:text-primary">
                            Go to My List
                        </span>
                        <ArrowRight className="h-5 w-5 text-secondary transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                    </button>
                </div>
            </div>
            <div className="hidden max-h-[410px] w-[450px] rounded-xl lg:flex xl:w-[522px]">
                <MoviesBanner />
            </div>
        </div>
    );
};
