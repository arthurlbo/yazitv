import { ReactNode } from "react";

export interface MovieCardProps {
    children: ReactNode;
}

/**
 * Movie Card Component
 * @param children - Content of the movie card.
 */
export const MovieCard = ({ children }: MovieCardProps) => {
    return (
        <div
            className="
                group
                relative
                flex
                h-[170px]
                max-h-[170px]
                min-w-[290px]
                max-w-[290px]
                cursor-pointer
                flex-col
                items-center
                justify-end
                overflow-hidden
                rounded-xl
                transition-all
                duration-300
                ease-in-out
                md:h-[180px]
                md:max-h-[180px]
                md:min-w-[300px]
                md:max-w-[300px]
                xl:h-[190px]
                xl:max-h-[190px]
                xl:min-w-[320px]
                xl:max-w-[320px]
                2xl:h-[200px]
                2xl:max-h-[200px]
                2xl:min-w-[340px]
                2xl:max-w-[340px]
            "
        >
            {children}
        </div>
    );
};
