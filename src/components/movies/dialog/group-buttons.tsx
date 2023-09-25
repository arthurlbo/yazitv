import { Download, LucideIcon, PartyPopper } from "lucide-react";

import { FavoriteButton } from "./favorite-button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const TooltipText = ({ text }: { text: string }) => {
    return <span className="text-sm font-normal text-primary">{text}</span>;
};

const Toast = ({ icon: Icon, text }: { icon: LucideIcon; text: string }) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
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
                        <Icon className="h-5 w-5 text-primary" />
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <TooltipText text={text} />
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export const GroupButtons = () => {
    return (
        <div className="flex items-center gap-3">
            <FavoriteButton />
            <Toast icon={PartyPopper} text="Watch in Party" />
            <Toast icon={Download} text="Download" />
        </div>
    );
};
