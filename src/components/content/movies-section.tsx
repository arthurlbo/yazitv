import { api } from "@/lib/api";

import { Genre, GenresData, MoviesData } from "@/components/movies/types";

import { Party } from "@/components/movies/party";
import { MovieDialog } from "@/components/movies/dialog";
import { MovieCard } from "@/components/movies/movie-card";
import { ProgressBar } from "@/components/movies/progress-bar";
import { MovieBackdrop } from "@/components/movies/movie-backdrop";
import { MoviesWrapper } from "@/components/movies/movies-wrapper";
import { MovieInformation } from "@/components/movies/movie-information";

interface MoviesSectionProps {
    id: string;
    sectionTitle: string;
    apiUrl: string;
    haveProgress?: boolean;
    isParty?: boolean;
}

/**
 * Function to get the movie's genres.
 * @param genres - List of genres.
 * @param genreIds - Movie's genres ids.
 */
const handleGenres = (genres: Genre[], genreIds: number[]) => {
    return genreIds.map((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
    });
};

/**
 * Component that separate the movies into sections.
 * @param id - Id of the movies section.
 * @param sectionTitle - Title of the movies section.
 * @param apiUrl - Api url to get the movies list.
 * @param haveProgress - Flag that indicates if the movies card should show the progress bar.
 * @param isParty - Flag that indicates if the section is a party section.
 */
export const MoviesSection = async ({
    id,
    sectionTitle,
    apiUrl,
    haveProgress = false,
    isParty = false,
}: MoviesSectionProps) => {
    const {
        data: { results: moviesList },
    } = await api.get<MoviesData>(apiUrl);

    const {
        data: { genres },
    } = await api.get<GenresData>("/genre/movie/list?language=en");

    const progress = haveProgress ? Math.random() * 101 : undefined;

    return (
        <div data-testid={id || "movies-section"} className="flex w-full flex-col items-start gap-8">
            <MoviesWrapper sectionTitle={sectionTitle} moviesList={moviesList}>
                {moviesList.map((movie) => {
                    const handledGenres = handleGenres(genres, movie.genre_ids);

                    return (
                        <MovieCard key={movie.id}>
                            <MovieInformation isParty={isParty} progress={progress} {...movie}>
                                <MovieDialog genres={handledGenres} isParty={isParty} progress={progress} {...movie} />
                            </MovieInformation>

                            <MovieBackdrop isParty={isParty} isInDialog={false} {...movie} />

                            {progress && <ProgressBar width="w-[90%]" progress={progress} />}

                            {isParty && <Party title={movie.title} genres={handledGenres} />}
                        </MovieCard>
                    );
                })}
            </MoviesWrapper>
        </div>
    );
};
