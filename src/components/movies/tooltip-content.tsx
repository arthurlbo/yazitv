import { TooltipContent as PrimitiveTooltipContent } from "@/components/ui/tooltip";

interface TooltipContentProps {
    text: string;
}

/**
 * Tooltip content component.
 * @param text - Text of the tooltip content.
 */
export const TooltipContent = ({ text }: TooltipContentProps) => {
    return (
        <PrimitiveTooltipContent>
            <span className="text-sm font-normal text-primary">{text}</span>
        </PrimitiveTooltipContent>
    );
};
