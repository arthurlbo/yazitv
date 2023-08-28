import { Search } from "lucide-react";

import { Drawer } from "./Drawer";
import { IconButton } from "@/components/ui/IconButton";

export const Mobile = () => {
    return (
        <div className="flex items-center gap-5">
            <IconButton icon={Search} />
            <Drawer />
        </div>
    );
};
