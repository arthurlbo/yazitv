export const Skeleton = () => {
    return (
        <div
            data-testid="movie-skeleton"
            className="
                z-10
                max-h-[170px]
                min-h-[170px]
                min-w-[290px]
                max-w-[290px]
                animate-pulse
                bg-slate-600
                md:max-h-[180px]
                md:min-h-[180px]
                md:min-w-[300px]
                md:max-w-[300px]
                xl:max-h-[190px]
                xl:min-h-[190px]
                xl:min-w-[320px]
                xl:max-w-[320px]
                2xl:max-h-[200px]
                2xl:min-h-[200px]
                2xl:min-w-[340px]
                2xl:max-w-[340px]
            "
        />
    );
};
