interface ProgressBarProps {
    progress: number;
}

/**
 * Component that displays the progress of the watched movie.
 * @param progress - Progress value from 0 to 100 of the movie.
 */
export const ProgressBar = ({ progress }: ProgressBarProps) => {
    return (
        <div className="h-1 w-full rounded-full bg-tertiary">
            <div
                role="progressbar"
                aria-label="Progress of the watched movie"
                aria-valuenow={progress}
                className="h-1 rounded-full bg-[#E50914]"
                style={{
                    width: `${progress}%`,
                }}
            />
        </div>
    );
};
