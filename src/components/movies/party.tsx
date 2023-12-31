import Image from "next/image";

import Avatar1 from "@/assets/avatar1.svg";
import Avatar2 from "@/assets/avatar2.svg";
import Avatar3 from "@/assets/avatar3.svg";

interface PartyProps {
    title: string;
    genres: string[];
}

const avatars = [Avatar1, Avatar2, Avatar3];

/**
 * Component that displays the party information when the movie was watched in the party mode.
 * @param title - Title of the movie.
 * @param genres - Genres of the movie.
 */
export const Party = ({ title, genres }: PartyProps) => {
    return (
        <div
            data-testid="movie-party-card"
            className="
                absolute
                bottom-0
                left-0
                z-10
                flex
                max-h-[60px]
                min-h-[60px]
                w-full
                items-center
                justify-between
                rounded-b-xl
                bg-hover/80
                px-3
                xl:max-h-[70px]
                xl:min-h-[70px]
            "
        >
            <div className="flex flex-col items-start">
                <h1 className="line-clamp-1 max-w-[200px] text-sm font-bold text-primary xl:text-base">
                    {title ?? "Title not provided"}
                </h1>
                <p className="line-clamp-1 max-w-[200px] text-xs font-semibold text-secondary xl:text-sm">
                    {genres.join(", ")}
                </p>
            </div>
            <div className="flex items-center -space-x-2 self-start pt-3">
                {avatars.map((avatar, index) => (
                    <Image
                        key={index}
                        src={avatar}
                        alt="avatar"
                        priority
                        className="h-6 w-6 rounded-full border border-tertiary xl:h-7 xl:w-7"
                    />
                ))}
            </div>
        </div>
    );
};
