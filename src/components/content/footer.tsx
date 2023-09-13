import Link from "next/link";

import { Github, Instagram, Linkedin } from "lucide-react";

import { IconButton } from "../ui/icon-button";

const socialItems = [
    {
        icon: Instagram,
        href: "https://instagram.com/arthur.lbo",
    },
    {
        icon: Linkedin,
        href: "https://linkedin.com/in/arthurlbo",
    },
    {
        icon: Github,
        href: "https://github.com/arthurlbo",
    },
];

export const Footer = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-5 bg-background md:flex-row md:gap-9">
            <div className="flex items-center gap-3">
                {socialItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        target="_blank"
                        className="rounded-full focus:outline-none focus:ring-2 focus:ring-complementary/80 focus:ring-offset-2 focus:ring-offset-background"
                    >
                        <IconButton icon={item.icon} />
                    </Link>
                ))}
            </div>
            <div className="h-px w-full flex-none bg-hover md:h-14 md:w-px" />
            <h1 className="text-base font-bold text-primary">Made with 🤍 by Arthur</h1>
        </div>
    );
};
