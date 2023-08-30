import Image from "next/image";

import GreenShepre from "@/assets/greenSphere.webp";
import PurpleShepre from "@/assets/purpleSphere.webp";

export const CtaCard = () => {
    return (
        <div className="relative h-full max-h-40 w-full flex-none overflow-hidden rounded-2xl border border-hover lg:h-36 lg:max-h-36 xl:max-h-40">
            <Image
                src={GreenShepre}
                alt="green sphere"
                priority
                width={188}
                height={188}
                className="absolute -left-24 -top-24 z-0"
            />
            <Image
                src={PurpleShepre}
                alt="purple sphere"
                priority
                width={188}
                height={188}
                className="absolute -bottom-24 -right-24 z-0"
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
