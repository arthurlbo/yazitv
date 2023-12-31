import Image from "next/image";

import { ChevronRight } from "lucide-react";

import Avatar1 from "@/assets/avatar1.svg";
import Avatar2 from "@/assets/avatar2.svg";
import Avatar3 from "@/assets/avatar3.svg";

interface CardProps {
    name: string;
    avatar: string;
    isOnline?: boolean;
}

const cardItems: CardProps[] = [
    {
        name: "Eva Jones",
        avatar: Avatar1,
    },
    {
        name: "Benjamin Smith",
        avatar: Avatar2,
        isOnline: false,
    },
    {
        name: "Emma Smith",
        avatar: Avatar3,
    },
];

/**
 * Card component for the user's connections.
 * @param name - Name of the connection.
 * @param avatar - Avatar of the connection.
 * @param isOnline - If the connection is online or not.
 */
const Card = ({ name, avatar, isOnline = true }: CardProps) => {
    return (
        <button
            className="
                flex
                h-11
                w-full
                items-center
                justify-between
                rounded-2xl
                border
                border-hover
                bg-transparent
                px-4
                transition-all
                duration-200
                hover:border-tertiary
                focus:outline-none
                focus:ring-2
                focus:ring-complementary/80
                focus:ring-offset-2
                focus:ring-offset-background
                xl:h-10
            "
        >
            <div className="flex items-center gap-3">
                <Image src={avatar} alt="avatar" width={24} height={24} className="rounded-full" priority />
                <span className="text-sm font-medium text-tertiary">{name}</span>
            </div>
            <div className={`h-3 w-3 rounded-full ${isOnline ? "bg-green-500" : "bg-zinc-700"}`} />
        </button>
    );
};

/**
 * Section in the main nav that displays the first 3 user's connections.
 */
export const Connections = () => {
    return (
        <div
            data-testid="main-nav-connections-section"
            className="flex w-full flex-col items-start justify-start gap-5"
        >
            <div className="flex w-full items-center justify-between px-4 font-bold uppercase text-tertiary">
                <span className="text-xs">connections</span>
                <div className="group flex cursor-pointer items-center gap-0.5">
                    <span className="text-[10px] group-hover:text-secondary">see all</span>
                    <ChevronRight
                        className="
                            -mt-[0.6px]
                            h-3
                            w-3
                            text-tertiary
                            transition-all
                            duration-200
                            ease-in-out
                            group-hover:translate-x-1
                            group-hover:text-secondary
                        "
                    />
                </div>
            </div>
            <div className="flex w-full flex-col gap-3">
                {cardItems.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>
        </div>
    );
};
