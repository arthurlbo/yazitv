import { LucideIcon } from "lucide-react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TooltipButtonProps {
    icon: LucideIcon;
    text: string;
}

export const TooltipButton = ({ icon: Icon, text }: TooltipButtonProps) => {
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
                    <span className="text-sm font-normal text-primary">{text}</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
