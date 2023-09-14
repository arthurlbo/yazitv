import { Divider } from "./divider";
import { CtaCard } from "./cta-card";
import { MainMenu } from "./main-menu";
import { Connections } from "./connections";

/**
 * Sidebar that will be displayed on the main-nav of desktop devices.
 */
export const Desktop = () => {
    return (
        <div
            data-testid="main-nav-desktop"
            className="hidden h-full w-full flex-col items-start gap-5 xl:flex tall:justify-between"
        >
            <MainMenu />
            <Divider />
            <Connections />
            <Divider />
            <CtaCard />
        </div>
    );
};
