import { Hero } from "@/components/content/hero";
import { Header } from "@/components/content/header";
import { Footer } from "@/components/content/footer";
import { MoviesSection } from "@/components/content/movies-section";

export default function Home() {
    return (
        <div
            className="
                flex
                h-auto
                w-full
                max-w-full
                flex-col
                items-start
                justify-start
                gap-5
                self-end
                p-5
                xl:max-w-[calc(100vw-292px)]
                xl:gap-9
                xl:px-12
                xl:py-5
                massive:px-20
                massive:py-6
            "
        >
            <Header />

            <Hero />

            <MoviesSection
                id="continue-watching-section"
                title="Continue Watching"
                haveProgress
                apiUrl="/discover/movie?include_adult=false&include_video=false&language=en-US&page=1"
            />

            <MoviesSection
                id="trending-now-section"
                title="Trending Now"
                apiUrl="/trending/all/day?include_adult=false&include_video=false&language=en-US&page=1"
            />

            <MoviesSection
                id="parties-section"
                title="Parties"
                apiUrl="/discover/movie?include_adult=false&include_video=false&language=en-US&page=2"
                isParty
            />

            <MoviesSection
                id="my-list-section"
                title="My List"
                apiUrl="/discover/movie?include_adult=false&include_video=false&language=en-US&page=3"
            />

            <MoviesSection
                id="top-picks-section"
                title="Top Picks for Arthur"
                apiUrl="/movie/top_rated?include_adult=false&include_video=false&language=en-US&page=2"
            />

            <MoviesSection
                id="new-releases-section"
                title="New Releases"
                apiUrl="/movie/upcoming?include_adult=false&include_video=false&language=en-US&page=1"
            />

            <MoviesSection
                id="acclaimed-movies-section"
                title="Critically Acclaimed Movies"
                apiUrl="/movie/top_rated?include_adult=false&include_video=false&language=en-US&page=1"
            />

            <Footer />
        </div>
    );
}
