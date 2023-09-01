import Image from "next/image";

import GreenShepre from "@/assets/greenSphere.webp";
import PurpleShepre from "@/assets/purpleSphere.webp";

export const CtaCard = () => {
    return (
        <div
            tabIndex={0}
            className="
            group
            relative
            h-full
            max-h-40
            w-full
            flex-none
            cursor-pointer
            overflow-hidden
            rounded-2xl
            border
            border-hover
            transition-all
            duration-200
            hover:border-tertiary
            focus:outline-none
            focus:ring-2
            focus:ring-complementary/80
            focus:ring-offset-2
            focus:ring-offset-background
            lg:h-36
            lg:max-h-36
            xl:h-44
            xl:max-h-44
            "
        >
            <Image
                src={GreenShepre}
                alt="green sphere"
                priority
                width={188}
                className="infinite absolute -left-24 -top-24 z-0 h-auto rotate-180 transition-all duration-1000 group-hover:rotate-[540deg]"
            />
            <Image
                src={PurpleShepre}
                alt="purple sphere"
                priority
                width={188}
                className="infinite absolute -bottom-[90px] -right-[90px] z-0  h-auto rotate-180  duration-1000 group-hover:rotate-[540deg]"
            />
            <div className="flex h-full flex-col items-center justify-center gap-4">
                <h1 className="z-10 text-xl font-extrabold text-primary">Explore a new world !</h1>
                <p className="z-10 w-48 text-center text-sm font-medium text-secondary">
                    Upgrade for Personalized Content & Features
                </p>
            </div>
        </div>
    );
};
