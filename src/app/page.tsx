import { Hero } from "@/components/content/hero";
import { Header } from "@/components/content/header";

export default function Home() {
    return (
        <div className="massive:px-20 flex h-auto w-full max-w-full flex-col items-start justify-start gap-5 self-end p-5 lg:max-w-[calc(100vw-292px)] lg:gap-9 lg:px-12 lg:py-4">
            <Header />
            <Hero />
        </div>
    );
}
