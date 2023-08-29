import { LucideIcon } from "lucide-react";

export interface NavButtonProps {
    id: number;
    label: string;
    icon: LucideIcon;
    link: string;
}

export const NavButton = ({ icon: Icon, label, link }: NavButtonProps) => {
    const isActive = "/" === link;

    return (
        <button
            className={`flex h-10 w-full items-center justify-start gap-3 rounded-2xl px-4 bg-${
                isActive ? "hover" : "transparent"
            }`}
        >
            <Icon className={`h-5 w-5 text-${isActive ? "primary" : "tertiary"}`} />
            <span className={`text-sm font-medium text-${isActive ? "primary" : "tertiary"}`}>{label}</span>
        </button>
    );
};
