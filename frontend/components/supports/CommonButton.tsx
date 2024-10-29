import { cn } from "@/utils/utility";
import Link from "next/link";
import { memo } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    icon?: React.ReactNode;
    borderRadius?: string;
    background?: string;
    border?: string;
    path?: string;
    textColor?: string;
}

const CommonButton = ({
    text,
    background = "bg-primary-400",
    border,
    borderRadius = "rounded",
    icon,
    path,
    textColor = "text-white",
    className,
    ...rest
}: Props) => {
    return path ? (
        <Link href={path} className={cn("px-8  h-[52px] flex items-center gap-2 w-fit", background, borderRadius, border, className)}>
            <span className={cn("text-lg font-semibold whitespace-nowrap", textColor)}>{text}</span>
            {icon ?? icon}
        </Link>
    ) : (
        <button {...rest} className={cn("px-8  h-[52px] flex items-center gap-2 w-fit", background, borderRadius, border, className)}>
            <span className={cn("text-lg font-semibold whitespace-nowrap", textColor)}>{text}</span>
            {icon ?? icon}
        </button>
    );
};
export default memo(CommonButton);
