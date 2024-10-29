"use client";

import { NavItem } from "@/libraries/type";
import { cn, isNavActive } from "@/utils/utility";
import { Builder } from "builder-pattern";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
    const pathname = usePathname();
    const navItems = [Builder<NavItem>().title("Dashboard").path("/admin").build(), Builder<NavItem>().title("News").path("/admin/news").build()];

    return (
        <div className="shadow-lg p-4 h-full flex flex-col space-y-2 w-[300px]">
            {navItems.map((nav) => (
                <Link href={nav.path} key={nav.title} className={cn("p-3 hover:bg-black/10 rounded", isNavActive(nav.path, pathname) && "bg-black/10")}>
                    {nav.title}
                </Link>
            ))}
        </div>
    );
};
export default SideBar;
