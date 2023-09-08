"use client";

import { api } from "@/lib/api";
import { MovieCard } from "./movieCard";
import { MoviesWrapper } from "./moviesWrapper";

export const MoviesSection = async () => {
    const moviesData = await api.get("/movie/popular?language=pt-BR&page=1");
    console.log("moviesData", moviesData);

    const items = [
        <>
            <MovieCard isParty />
            <MovieCard progress={50} />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </>,
        <>
            <MovieCard />
            <MovieCard />
            <MovieCard isParty />
            <MovieCard progress={50} />
            <MovieCard />
        </>,
        <>
            <MovieCard />
            <MovieCard />
            <MovieCard isParty />
            <MovieCard progress={50} />
            <MovieCard />
        </>,
    ];

    return <MoviesWrapper title="Continue Watching" items={items} />;
};
