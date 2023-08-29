import { Menu, Search, XCircle } from "lucide-react";

import { IconButton } from "@/components/ui/iconButton";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetClose } from "@/components/ui/sheet";

export const Mobile = () => {
    return (
        <div className="flex items-center gap-5 lg:hidden">
            <IconButton icon={Search} />
            <Sheet>
                <SheetTrigger asChild>
                    <IconButton icon={Menu} />
                </SheetTrigger>
                <SheetContent
                    side="right"
                    className="max-w-screen flex w-full flex-col gap-5 bg-background p-5 md:max-w-md"
                >
                    <SheetHeader>
                        <SheetClose asChild>
                            <IconButton icon={XCircle} />
                        </SheetClose>
                    </SheetHeader>
                    <SheetFooter></SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
};
