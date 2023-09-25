import { X } from "lucide-react";

import { DialogClose } from "@/components/ui/dialog";

export const CloseButton = () => {
    return (
        <DialogClose asChild>
            <button
                className="
                    absolute
                    right-3
                    top-3
                    z-20
                    flex
                    h-9
                    w-9
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    bg-background/80
                    transition-all
                    duration-200
                    focus:outline-none
                    focus:ring-2
                    focus:ring-complementary/80
                    focus:ring-offset-2
                    focus:ring-offset-slate-400
                "
            >
                <X className="h-5 w-5 text-primary" />
            </button>
        </DialogClose>
    );
};
