import Image from "next/image";

import Me from "@/assets/me.svg";

export const Avatar = () => {
    return <Image src={Me} alt="avatar" className="h-14 w-14 rounded-full lg:h-16 lg:w-16" priority />;
};
