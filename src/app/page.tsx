import { Hero } from "@/components/content/hero";
import { Header } from "@/components/content/header";
import { Footer } from "@/components/content/footer";
import { MyListSection } from "@/components/content/my-list-section";
import { PartiesSection } from "@/components/content/parties-section";
import { TopPicksSection } from "@/components/content/top-picks-section";
import { TrendingNowSection } from "@/components/content/trending-now-section";
import { NewReleasesSection } from "@/components/content/new-releases-section";
import { AcclaimedMoviesSection } from "@/components/content/acclaimed-movies-section";
import { ContinueWatchingSection } from "@/components/content/continue-watching-section";

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
            <ContinueWatchingSection />
            <TrendingNowSection />
            <PartiesSection />
            <MyListSection />
            <TopPicksSection />
            <NewReleasesSection />
            <AcclaimedMoviesSection />
            <Footer />
        </div>
    );
}
