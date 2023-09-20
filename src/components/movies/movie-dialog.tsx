import { ReactElement } from "react";

import { X } from "lucide-react";

import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface MovieDialogProps {
    MovieDialogTrigger: ReactElement;
}

export const MovieDialog = ({ MovieDialogTrigger }: MovieDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{MovieDialogTrigger}</DialogTrigger>
            <DialogContent className="flex h-44 w-full max-w-lg flex-col items-start rounded-xl bg-hover">
                <DialogClose asChild>
                    <button
                        className="
                            absolute
                            right-3
                            top-2
                            flex
                            h-10
                            w-10
                            cursor-pointer
                            items-center
                            justify-center
                            rounded-full
                            bg-hover
                            transition-all
                            duration-200
                            hover:bg-slate-600
                            focus:outline-none
                            focus:ring-2
                            focus:ring-complementary/80
                            focus:ring-offset-2
                            focus:ring-offset-hover/70
                        "
                    >
                        <X className="h-5 w-5 text-primary" />
                    </button>
                </DialogClose>
                <span>Hello world</span>
            </DialogContent>
        </Dialog>
    );
};
