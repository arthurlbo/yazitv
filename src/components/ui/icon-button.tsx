import { LucideIcon } from "lucide-react";

interface IconButtonProps {
    icon: LucideIcon;
    haveNotification?: boolean;
}

/**
 * Icon button component.
 * @param icon - Icon that will be displayed on the button.
 * @param haveNotification - If the button handles with some interaction that have notifications.
 */
export const IconButton = ({ icon: Icon, haveNotification = false }: IconButtonProps) => {
    return (
        <button
            className="
                relative
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
            <div className="relative">
                <Icon className="h-5 w-5 text-primary" />
                {haveNotification && (
                    <div className="absolute right-[3px] top-0 h-1.5 w-1.5 rounded-full bg-[#E50914]" />
                )}
            </div>
        </button>
    );
};
