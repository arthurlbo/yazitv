import { MyListSection } from "@/components/content/my-list-section";
import { PartiesSection } from "@/components/content/parties-section";
import { TopPicksSection } from "@/components/content/top-picks-section";
import { TrendingNowSection } from "@/components/content/trending-now-section";
import { NewReleasesSection } from "@/components/content/new-releases-section";
import { AcclaimedMoviesSection } from "@/components/content/acclaimed-movies-section";
import { ContinueWatchingSection } from "@/components/content/continue-watching-section";

export default function Home() {
    return (
        <>
            <ContinueWatchingSection />
            <TrendingNowSection />
            <PartiesSection />
            <MyListSection />
            <TopPicksSection />
            <NewReleasesSection />
            <AcclaimedMoviesSection />
        </>
    );
}
