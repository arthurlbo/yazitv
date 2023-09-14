import { Bell, LucideIcon, Menu, MessageCircle, Search, XCircle } from "lucide-react";

import { Avatar } from "@/components/ui/avatar";
import { IconButton } from "@/components/ui/icon-button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";

import { Divider } from "./divider";
import { CtaCard } from "./cta-card";
import { MainMenu } from "./main-menu";
import { Connections } from "./connections";

interface ActionButtonProps {
    dataTestId: string;
    label: string;
    icon: LucideIcon;
    haveNotification?: boolean;
}

/**
 * Button that handle with some user's interactions in the app (notifications and messages).
 * @param label - The label of the button.
 * @param icon - Icon that will be displayed on the button.
 * @param haveNotification - If the user's interaction have notification.
 */
const InteractionButton = ({ dataTestId, icon: Icon, label, haveNotification = false }: ActionButtonProps) => {
    return (
        <button
            data-testid={dataTestId}
            className="
                flex
                h-full
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-hover
                bg-transparent
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
            <span className="text-xs font-light text-primary">{label}</span>
        </button>
    );
};

/**
 * Drawer that will be displayed on the main-nav of mobile devices.
 */
export const Mobile = () => {
    return (
        <div data-testid="main-nav-mobile" className="flex items-center gap-5 xl:hidden">
            <IconButton dataTestId="search-button" icon={Search} />
            <Sheet>
                <SheetTrigger asChild>
                    <IconButton dataTestId="drawer-button" icon={Menu} />
                </SheetTrigger>
                <SheetContent
                    data-testid="drawer-content"
                    side="right"
                    className="max-w-screen flex h-full w-full flex-col gap-5 bg-background p-5 md:max-w-[425px]"
                >
                    <div data-testid="drawer-header" className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar />
                            <div className="flex flex-col items-start">
                                <h1 className="text-base font-normal text-primary">Arthur Lobo</h1>
                                <p className="text-sm font-light text-secondary">arthur@email.com</p>
                            </div>
                        </div>
                        <SheetClose asChild>
                            <IconButton dataTestId="drawer-close-button" icon={XCircle} />
                        </SheetClose>
                    </div>
                    <Divider />
                    <div className="flex h-11 w-full items-center justify-between gap-3">
                        <InteractionButton
                            dataTestId="interaction-button-my-messages"
                            label="My Messages"
                            icon={MessageCircle}
                        />
                        <div className="h-11 w-px bg-hover" />
                        <InteractionButton
                            dataTestId="interaction-button-notifications"
                            label="Notifications"
                            icon={Bell}
                            haveNotification
                        />
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
