import { cn } from "@/utils/utility";
import React from "react";

interface ShadeLayerProps extends React.HTMLAttributes<HTMLDivElement> {}

const ShadeLayer = ({ className }: ShadeLayerProps) => {
    return <div className={cn("absolute top-0 left-0 w-full h-full", className)}></div>;
};
export default ShadeLayer;
