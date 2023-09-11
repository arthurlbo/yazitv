import Image from "next/image";

import Avatar1 from "@/assets/avatar1.svg";
import Avatar2 from "@/assets/avatar2.svg";
import Avatar3 from "@/assets/avatar3.svg";

interface PartyProps {
    title: string;
    genre: string[];
}

export const Party = ({ title, genre }: PartyProps) => {
    const avatars = [Avatar1, Avatar2, Avatar3];

    return (
        <div className="flex h-[60px] max-h-[60px] w-full items-center justify-between bg-hover px-3 md:h-[80px] md:max-h-[80px]">
            <div className="flex flex-col items-start">
                <h1 className="text-sm font-bold text-primary md:text-base">{title}</h1>
                <p className="text-xs font-semibold text-secondary md:text-sm">{genre.join(", ")}</p>
            </div>
            <div className="flex items-center -space-x-2 self-start pt-3">
                {avatars.map((avatar, index) => (
                    <Image
                        key={index}
                        src={avatar}
                        alt="avatar"
                        priority
                        className="h-6 w-6 rounded-full border border-secondary md:h-7 md:w-7"
                    />
                ))}
            </div>
        </div>
    );
};
