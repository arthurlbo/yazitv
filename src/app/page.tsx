import { Hero } from "@/components/content/hero";
import { Header } from "@/components/content/header";
import { MyListSection } from "@/components/content/myListSection";
import { PartiesSection } from "@/components/content/partiesSection";
import { TopPicksSection } from "@/components/content/TopPicksSection";
import { TrendingNowSection } from "@/components/content/trendingNowSection";
import { NewReleasesSection } from "@/components/content/newReleasesSection";
import { AcclaimedMoviesSection } from "@/components/content/acclaimedMoviesSection";
import { ContinueWatchingSection } from "@/components/content/continueWatchingSection";

export default function Home() {
    return (
        <div className="flex h-auto w-full max-w-full flex-col items-start justify-start gap-5 self-end p-5 xl:max-w-[calc(100vw-292px)] xl:gap-9 xl:px-12 xl:py-5 massive:px-20 massive:py-6">
            <Header />
            <Hero />
            <ContinueWatchingSection />
            {/* <TrendingNowSection />
            <PartiesSection />
            <MyListSection />
            <TopPicksSection />
            <NewReleasesSection />
            <AcclaimedMoviesSection /> */}
        </div>
    );
}
