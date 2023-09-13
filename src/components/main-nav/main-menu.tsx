import { Film, Flame, Heart, Home, Layers, LucideIcon, Rocket, Video } from "lucide-react";

export interface NavButtonProps {
    id: number;
    label: string;
    icon: LucideIcon;
    link: string;
}

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

export const NavButton = ({ icon: Icon, label, link }: NavButtonProps) => {
    const isActive = "/" === link;

    return (
        <button
            className={`
                flex
                h-11
                w-full
                items-center
                justify-start
                gap-3
                rounded-2xl
                px-4
                focus:outline-none
                focus:ring-2
                focus:ring-complementary/80
                focus:ring-offset-2
                focus:ring-offset-background
                xl:h-10
                bg-${isActive ? "hover" : "transparent"}
                group
            `}
        >
            <Icon
                className={`
                    h-5
                    w-5
                    text-${isActive ? "primary" : "tertiary"}
                    transition-colors
                    duration-200
                    group-hover:text-primary
                `}
            />
            <span
                className={`
                    text-sm
                    font-medium
                    text-${isActive ? "primary" : "tertiary"}
                    transition-colors
                    duration-200
                    group-hover:text-primary
                `}
            >
                {label}
            </span>
        </button>
    );
};

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
