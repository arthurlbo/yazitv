import Image from "next/image";

import Me from "@/assets/me.svg";

/**
 * User's avatar component.
 */
export const Avatar = () => {
    return <Image src={Me} alt="avatar" className="h-14 w-14 rounded-full xl:h-16 xl:w-16" priority />;
};
