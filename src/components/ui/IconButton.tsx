import { LucideIcon } from "lucide-react";

interface IconButtonProps {
    icon: LucideIcon;
}

export const IconButton = ({ icon: Icon }: IconButtonProps) => {
    return (
        <div className="bg-background border-hover flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border">
            <Icon className="text-primary h-5 w-5" />
        </div>
    );
};
