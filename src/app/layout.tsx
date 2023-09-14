import "./globals.css";

import { Poppins } from "next/font/google";

import { MainNav } from "@/components/main-nav";
import { Hero } from "@/components/content/hero";
import { Header } from "@/components/content/header";
import { Footer } from "@/components/content/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

export const metadata = {
    title: "Yazy.tv | Home",
    description:
        "Watch movies and TV shows together with friends and family with Yazi.tv | Stream thousands of movies and TV shows on demand | Watch with friends and family in real time | Create watch parties and chat with your friends while you watch | Get personalized recommendations based on your watch history | Download movies and TV shows to watch offline.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`
                    ${poppins.variable}
                    relative
                    flex
                    min-h-screen
                    w-full
                    max-w-full
                    flex-col
                    items-start
                    justify-start
                    overflow-x-hidden
                    bg-background
                    font-sans
                `}
            >
                <MainNav />
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
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
