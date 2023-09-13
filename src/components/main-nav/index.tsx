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
                xl:fixed
                xl:left-0
                xl:top-0
                xl:max-h-screen
                xl:min-h-screen
                xl:max-w-[292px]
                xl:flex-col
                xl:items-start
                xl:justify-start
                xl:gap-6
                xl:overflow-y-scroll
                xl:border-r
                xl:border-hover
                xl:px-4
                xl:py-6
                tall:h-full
                tall:gap-7
                tall:py-7
            "
        >
            <a href="/">
                <Image src={Logo} alt="Yazi.tv" priority className="h-14 w-[123px] cursor-pointer xl:w-[105px]" />
            </a>
            <Mobile />
            <Desktop />
        </div>
    );
};
