import { Bell, LucideIcon, Menu, MessageCircle, Search, XCircle } from "lucide-react";

import { Avatar } from "@/components/ui/avatar";
import { IconButton } from "@/components/ui/icon-button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetClose } from "@/components/ui/sheet";

import { Divider } from "./divider";
import { CtaCard } from "./cta-card";
import { MainMenu } from "./main-menu";
import { Connections } from "./connections";

interface ActionButtonProps {
    label: string;
    icon: LucideIcon;
    haveNotification?: boolean;
}

const ActionButton = ({ icon: Icon, label, haveNotification = false }: ActionButtonProps) => {
    return (
        <button className="flex h-full w-full items-center justify-center gap-3 rounded-full border border-hover bg-transparent">
            <div className="relative">
                <Icon className="h-5 w-5 text-primary" />
                {haveNotification && (
                    <div className="absolute right-[3px] top-0 h-1.5 w-1.5 rounded-full bg-[#E50914]" />
                )}
            </div>
            <span className="text-xs font-light text-primary">{label}</span>
        </button>
    );
};

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
                    className="max-w-screen flex w-full flex-col gap-5 bg-background p-5 md:max-w-[425px]"
                >
                    <SheetHeader>
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar />
                                <div className="flex flex-col items-start">
                                    <h1 className="text-base font-normal text-primary">Arthur Lobo</h1>
                                    <p className="text-sm font-light text-secondary">arthur@email.com</p>
                                </div>
                            </div>
                            <SheetClose asChild>
                                <IconButton icon={XCircle} />
                            </SheetClose>
                        </div>
                    </SheetHeader>
                    <Divider />
                    <div className="flex h-11 w-full items-center justify-between gap-3">
                        <ActionButton label="My Messages" icon={MessageCircle} />
                        <div className="h-11 w-px bg-hover" />
                        <ActionButton label="Notifications" icon={Bell} haveNotification />
                    </div>
                    <Divider />
                    <MainMenu />
                    <Divider />
                    <Connections />
                    <Divider />
                    <CtaCard />
                </SheetContent>
            </Sheet>
        </div>
    );
};
