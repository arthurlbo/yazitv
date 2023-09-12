import { MovieCardProps } from "./movieCard";

type ProgressProps = Omit<MovieCardProps, "party" | "backdrop_path">;

export const ProgressBar = ({ progress }: ProgressProps) => {
    return (
        <div className="h-1 w-full rounded-full bg-tertiary">
            <div
                role="progressbar"
                aria-label="Progresso de hábitos completados nesse dia"
                aria-valuenow={progress}
                className="h-1 rounded-full bg-[#E50914] transition-all duration-300"
                style={{
                    width: `${progress}%`,
                }}
            />
        </div>
    );
};
