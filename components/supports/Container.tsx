"use client";

import { em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import CommonButton from "./CommonButton";

interface Props {
    subtitle?: string;
    title: string;
    position?: "top" | "left";
    more?: string;
    children: React.ReactNode;
}

const Container = ({ subtitle, children, more, position = "top", title }: Props) => {
    const sm = useMediaQuery(`(min-width: ${em(768)})`);
    return position == "top" ? (
        <div>
            <div className="text-center">
                {subtitle && <span className="sub-title">{subtitle}</span>}
                <h2 className="mb-10">{title}</h2>
            </div>
            {children}
        </div>
    ) : more ? (
        <div>
            <div className="flex justify-between flex-wrap gap-y-4 items-end mb-10">
                <div>
                    <span className="sub-title">{subtitle}</span>
                    <h2>{title}</h2>
                </div>
                {sm && <CommonButton text={more} path="/" />}
            </div>
            {children}

            {!sm && (
                <div className="flex justify-center mt-10">
                    <CommonButton text={more} path="/" />
                </div>
            )}
        </div>
    ) : (
        <></>
    );
};
export default Container;
