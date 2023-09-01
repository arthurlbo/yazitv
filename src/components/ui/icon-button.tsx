import { LucideIcon } from "lucide-react";

interface IconButtonProps {
    icon: LucideIcon;
}

export const IconButton = ({ icon: Icon }: IconButtonProps) => {
    return (
        <button
            className="
                flex
                h-11
                w-11
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-hover
                bg-background
                focus:outline-none
                focus:ring-2
                focus:ring-complementary/80
                focus:ring-offset-2
                focus:ring-offset-background
                "
        >
            <Icon className="h-5 w-5 text-primary" />
        </button>
    );
};
