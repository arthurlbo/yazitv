import { Divider } from "./divider";
import { CtaCard } from "./cta-card";
import { MainMenu } from "./main-menu";
import { Connections } from "./connections";

export const Desktop = () => {
    return (
        <div className="tall:justify-between hidden h-full w-full flex-col items-start gap-5 lg:flex">
            <MainMenu />
            <Divider />
            <Connections />
            <Divider />
            <CtaCard />
        </div>
    );
};
