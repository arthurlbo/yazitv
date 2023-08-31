"use client";

import Image from "next/image";
import { useMotionValue, useTransform, motion } from "framer-motion";

import GreenShepre from "@/assets/greenSphere.webp";
import PurpleShepre from "@/assets/purpleSphere.webp";

export const CtaCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [100, -100], [-30, 30]);

    return (
        <motion.div
            style={{ x, y, rotateX, perspective: "100px", rotateY, z: 100 }}
            onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                const offsetX = event.clientX - rect.left - rect.width / 2;
                const offsetY = event.clientY - rect.top - rect.height / 2;
                x.set(offsetX * 0.1);
                y.set(offsetY * 0.1);
            }}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            className="relative h-full max-h-40 w-full flex-none overflow-hidden rounded-2xl border border-hover lg:h-36 lg:max-h-36 xl:h-44 xl:max-h-44"
        >
            <Image
                src={GreenShepre}
                alt="green sphere"
                priority
                width={188}
                className="absolute -left-24 -top-24 z-0 h-auto"
            />
            <Image
                src={PurpleShepre}
                alt="purple sphere"
                priority
                width={188}
                className="absolute -bottom-[90px] -right-[90px] z-0 h-auto"
            />
            <div className="flex h-full flex-col items-center justify-center gap-4">
                <h1 className="z-10 text-xl font-extrabold text-primary">Explore a new world !</h1>
                <p className="z-10 w-48 text-center text-sm font-medium text-secondary">
                    Upgrade for Personalized Content & Features
                </p>
            </div>
        </motion.div>
    );
};
