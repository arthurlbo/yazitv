import { Menu, XCircle } from "lucide-react";

import { IconButton } from "@/components/ui/IconButton";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export const Drawer = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <IconButton icon={Menu} />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>Make changes to your profile here. Click</SheetDescription>
                </SheetHeader>
                <SheetFooter>
                    <SheetClose asChild>
                        <IconButton icon={XCircle} />
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};
