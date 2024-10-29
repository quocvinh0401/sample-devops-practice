import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...args: ClassValue[]) {
    return twMerge(clsx(args));
}

export const formatTime = (date: Date, option = 0) => {
    if (option == 0) return dayjs(date).format("MMM D, YYYY");
    else return dayjs(date).format("DD/MM/YYYY");
};

export const isNavActive = (route: string, path: string) => {
    if (route == "/" || route == "/admin") return route == path;
    else return path.startsWith(route);
};

export const getTypeFile = (file: File) => {
    return file?.name.split(".").pop() ?? "";
};
