import Image from "next/image";

import Logo from "@/assets/logo.svg";

import { Mobile } from "./Mobile";

export const MainNav = () => {
    return (
        <div
            className="
            bg-background
            lg:border-hover
            max-w-screen
            flex
            w-full
            flex-row
            items-center
            justify-between
            px-5
            py-5
            lg:fixed
            lg:left-0
            lg:top-0
            lg:min-h-screen
            lg:max-w-[292px]
            lg:flex-col
            lg:items-start
            lg:justify-start
            lg:gap-12
            lg:border-r
            lg:px-4
            lg:py-12
            "
        >
            <Image src={Logo} alt="Yazi.tv" width={123} height={50} priority />
            <Mobile />
        </div>
    );
};
