import { Bell, MessageCircle, Search } from "lucide-react";

import { Avatar } from "../ui/avatar";
import { IconButton } from "../ui/icon-button";

/**
 * Page's header component.
 */
export const Header = () => {
    return (
        <header data-testid="header" className="hidden h-16 w-full items-center justify-between xl:flex">
            <div className="relative">
                <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-[52%] text-primary" />
                <input
                    type="text"
                    placeholder="Search everything"
                    className="
                        h-12
                        w-[330px]
                        rounded-full
                        border
                        border-hover
                        bg-background
                        pl-[52px]
                        text-secondary
                        placeholder:text-tertiary
                        hover:border-[#545b6b]
                        focus:border-secondary
                        focus:outline-none
                    "
                />
            </div>
            <div className="flex items-center gap-9">
                <div className="flex items-center gap-3">
                    <IconButton icon={MessageCircle} />
                    <IconButton icon={Bell} haveNotification />
                </div>
                <Avatar />
            </div>
        </header>
    );
};
