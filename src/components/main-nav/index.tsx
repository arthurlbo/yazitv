import Image from "next/image";

import { Mobile } from "./mobile";
import { Desktop } from "./desktop";

import Logo from "@/assets/logo.svg";

export const MainNav = () => {
    return (
        <div
            className="
            max-w-screen
            flex
            w-full
            flex-row
            items-center
            justify-between
            gap-5
            bg-background
            px-5
            py-5
            scrollbar-none
            lg:fixed
            lg:left-0
            lg:top-0
            lg:max-h-screen
            lg:min-h-screen
            lg:max-w-[292px]
            lg:flex-col
            lg:items-start
            lg:justify-start
            lg:gap-6
            lg:overflow-y-scroll
            lg:border-r
            lg:border-hover
            lg:px-4
            lg:py-6
            tall:h-full
            tall:gap-7
            tall:py-7"
        >
            <a href="/">
                <Image src={Logo} alt="Yazi.tv" priority className="h-auto w-[123px] cursor-pointer lg:w-[105px]" />
            </a>
            <Mobile />
            <Desktop />
        </div>
    );
};
