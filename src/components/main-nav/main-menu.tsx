import { Film, Flame, Heart, Home, Layers, Rocket, Video } from "lucide-react";

import { NavButtonProps, NavButton } from "./nav-button";

const navigationItems: NavButtonProps[] = [
    {
        id: 1,
        label: "Home",
        icon: Home,
        link: "/",
    },
    {
        id: 2,
        label: "New & Popular",
        icon: Flame,
        link: "/news",
    },
    {
        id: 3,
        label: "Downloaded",
        icon: Layers,
        link: "/downloads",
    },
    {
        id: 4,
        label: "My List",
        icon: Heart,
        link: "/list",
    },
    {
        id: 5,
        label: "Movies",
        icon: Film,
        link: "/movies",
    },
    {
        id: 6,
        label: "Series",
        icon: Video,
        link: "/series",
    },
    {
        id: 7,
        label: "Coming Soon",
        icon: Rocket,
        link: "/soon",
    },
];

export const MainMenu = () => {
    return (
        <div className="flex w-full flex-col items-start justify-start gap-5">
            <span className="pl-4 text-xs font-bold uppercase text-tertiary">main menu</span>
            <div className="flex w-full flex-col items-start">
                {navigationItems.map((item) => (
                    <NavButton key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};
