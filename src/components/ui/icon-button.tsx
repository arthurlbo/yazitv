import { LucideIcon } from "lucide-react";

interface IconButtonProps {
    icon: LucideIcon;
}

export const IconButton = ({ icon: Icon }: IconButtonProps) => {
    return (
        <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-hover bg-background">
            <Icon className="h-5 w-5 text-primary" />
        </div>
    );
};
