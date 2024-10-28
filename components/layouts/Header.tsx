"use client";

import { navItems, serviceIcons } from "@/libraries/constants";
import { cn, isNavActive } from "@/utils/utility";
import { Burger, Collapse, Drawer, Menu } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconChevronDown, IconCircleArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MainLogo from "../supports/MainLogo";

const ContactButton = () => {
    return (
        <div className="flex bg-gradient-primary gap-2 items-center rounded-full px-6 r-5 py-[12.5px] w-fit">
            <span className="text-xl text-white">Contact us</span>
            <IconCircleArrowRight color="white" />
        </div>
    );
};

const Header = () => {
    const pathname = usePathname();
    const [style, setStyle] = useState("bg-white");
    const [colorNav, setColorNav] = useState("black");
    const [activeTab, setActiveTab] = useState(-1);
    const [opened, { toggle, close }] = useDisclosure();
    const router = useRouter();

    const lg = useMediaQuery("(min-width: 75em");

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY > 0) {
                setStyle("bg-white shadow");
                setColorNav("black");
            } else {
                setStyle("");
                pathname == "/contact" ? setColorNav("white") : setColorNav("black");
            }
        };
        window.addEventListener("scroll", changeColor);
        changeColor();

        return () => window.removeEventListener("scroll", changeColor);
    }, [pathname]);

    const navigating = (path: string, e: any) => {
        e.stopPropagation();
        router.push(path);
        close();
    };

    return (
        <div className={cn("flex justify-center w-full z-50 fixed top-0 h-[120px]", style)}>
            <div className="flex justify-between container w-full py-5 items-center">
                <MainLogo />
                {lg ? (
                    <>
                        <div className="flex gap-10 xl:gap-[60px]">
                            {navItems.map((item, index) =>
                                item.children ? (
                                    <Menu trigger="click-hover" key={index}>
                                        <Menu.Target>
                                            <div className="flex items-center gap-1">
                                                <Link
                                                    href={item.path}
                                                    className={cn(
                                                        "text-lg capitalize",
                                                        `text-${colorNav}`,
                                                        isNavActive(item.path, pathname) ? "text-primary-400" : `text-${colorNav}`
                                                    )}
                                                >
                                                    {item.title}
                                                </Link>
                                                <IconChevronDown size={20} color={colorNav == "white" ? "white" : "black"} />
                                            </div>
                                        </Menu.Target>
                                        <Menu.Dropdown className="!border-primary-400 !rounded-xl !px-0 !py-10 !shadow-primary-30">
                                            <div className="space-y-3">
                                                {item.children.map((children, indexChildren) => (
                                                    <Menu.Item key={indexChildren} className="!px-[60px] !py-5 hover:bg-primary-50">
                                                        <div className="flex gap-3 items-center">
                                                            <Image src={serviceIcons[indexChildren]} alt="" width={25} height={25} />
                                                            <Link href={children.path} className="text-black text-lg font-medium capitalize">
                                                                {children.title}
                                                            </Link>
                                                        </div>
                                                    </Menu.Item>
                                                ))}
                                            </div>
                                            {/* <div className="my-3 mx-5">
                                                <Divider variant="dashed" />
                                            </div>
                                            <Link href={"/services"} className="py-5 px-[60px] hover:bg-primary-50 flex items-center gap-5">
                                                <span className="text-black font-medium text-lg leading-[1.5625]">Explore all services</span>
                                                <IconCircleArrowRight size={24} color="#09244B" />
                                            </Link> */}
                                        </Menu.Dropdown>
                                    </Menu>
                                ) : (
                                    <Link
                                        key={index}
                                        href={item.path!}
                                        className={cn(
                                            "text-lg flex items-center capitalize",
                                            isNavActive(item.path!, pathname) ? "text-primary-400" : `text-${colorNav}`
                                        )}
                                    >
                                        {item.title}
                                    </Link>
                                )
                            )}
                        </div>
                        <div className="flex gap-5 items-center">
                            {/* <div className="flex items-center gap-1">
                                <IconLanguage size={24} color={colorNav == "white" ? "white" : "black"} />
                                <span className={cn(`text-${colorNav}`)}>EN</span>
                            </div> */}
                            <Link href={"/contact"}>
                                <ContactButton />
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex items-center">
                            <Burger opened={opened} onClick={toggle} color={colorNav} />
                        </div>
                        <Drawer.Root opened={opened} onClose={close} position="right">
                            <Drawer.Overlay />
                            <Drawer.Content>
                                <Drawer.Header style={{ boxShadow: "0px 0px 10px 1px rgba(0,0,0, .1)" }}>
                                    <Drawer.Title>
                                        <MainLogo />
                                    </Drawer.Title>
                                    <Drawer.CloseButton size={40} />
                                </Drawer.Header>
                                <Drawer.Body p={20}>
                                    <div className="grid">
                                        {navItems.map((item, index) => (
                                            <div key={index}>
                                                {item.children ? (
                                                    <div>
                                                        <button
                                                            className="flex justify-between items-center w-full"
                                                            onClick={() => setActiveTab(activeTab == index ? -1 : index)}
                                                        >
                                                            <div
                                                                className={cn("text-lg py-3", isNavActive(item.path, pathname) ? "text-primary-400" : "")}
                                                                onClick={(e) => navigating(item.path, e)}
                                                            >
                                                                {item.title}
                                                            </div>
                                                            <IconChevronDown size={20} />
                                                        </button>
                                                        <Collapse in={index == activeTab}>
                                                            <div className="flex flex-col items-start pl-3 gap-4 mt-2">
                                                                {item.children.map((child, indexChild) => (
                                                                    <button
                                                                        key={indexChild}
                                                                        className="flex items-center gap-2 py-2"
                                                                        onClick={(e) => navigating(child.path, e)}
                                                                    >
                                                                        <Image src={serviceIcons[indexChild]} alt="" width={20} height={20} />

                                                                        <span>{child.title}</span>
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        </Collapse>
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={(e) => navigating(item.path, e)}
                                                        className={cn(
                                                            "text-lg py-3 text-start w-full",
                                                            isNavActive(item.path, pathname) ? "text-primary-400" : ""
                                                        )}
                                                    >
                                                        {item.title}
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                        <hr className="mt-2 mb-6" />
                                        <button onClick={(e) => navigating("/contact", e)} className="flex justify-center w-full">
                                            <ContactButton />
                                        </button>
                                    </div>
                                </Drawer.Body>
                            </Drawer.Content>
                        </Drawer.Root>
                    </>
                )}
            </div>
        </div>
    );
};
export default Header;
