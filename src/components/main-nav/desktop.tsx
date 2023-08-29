import { Divider } from "./divider";
import { CtaCard } from "./cta-card";
import { MainMenu } from "./main-menu";
import { Connections } from "./connections";

export const Desktop = () => {
    return (
        <div className="hidden h-full w-full flex-col items-start gap-5 lg:flex tall:justify-between">
            <MainMenu />
            <Divider />
            <Connections />
            <Divider />
            <CtaCard />
        </div>
    );
};
