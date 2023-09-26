import { Info } from "lucide-react";

import { DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { TooltipContent } from "../tooltip-content";

/**
 * Button that open the dialog.
 */
export const TriggerButton = () => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                    <DialogTrigger asChild>
                        <button
                            className="
                                flex
                                items-center
                                justify-center
                                rounded-full
                                bg-transparent
                                p-2
                                outline-none
                                transition-all
                                duration-300
                                ease-in-out
                                hover:bg-slate-600
                                focus:ring-0
                            "
                        >
                            <Info className=" h-5 w-5 text-primary transition-colors duration-200 ease-in-out" />
                        </button>
                    </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent text="Information" />
            </Tooltip>
        </TooltipProvider>
    );
};
