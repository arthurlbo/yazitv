import { LucideIcon } from "lucide-react";

interface CarouselButtonProps {
    handleButtonClick: () => void;
    icon: LucideIcon;
}

export const CarouselButton = ({ icon: Icon, handleButtonClick }: CarouselButtonProps) => {
    return (
        <button
            onClick={handleButtonClick}
            className="
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-hover
                bg-background
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-tertiary
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
