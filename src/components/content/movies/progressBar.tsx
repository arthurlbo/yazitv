interface ProgressBarProps {
    progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
    return (
        <div className="absolute bottom-0 right-1/2 h-1 w-full translate-x-1/2 rounded-full bg-tertiary">
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
