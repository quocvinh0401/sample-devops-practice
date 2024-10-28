import { contactItems, navItems } from "@/libraries/constants";
import { cn } from "@/utils/utility";
import { IconMapPin, IconSend } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-primary-150 flex justify-center">
            <div className="w-full container py-10 relative">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-5 z-20 relative space-y-10">
                    <div>
                        <div className="flex items-center justify-center flex-wrap sm:flex-nowrap gap-[60px] mb-10">
                            <Image src={"/images/logo.png"} alt="logo" width={220} height={78} />
                            {/* <div className="flex items-center py-[14px] px-5 border-2 rounded-lg border-secondary-500 bg-white w-full gap-2 sm:min-w-[280px] xl:min-w-[357px]">
                                <input type="text" className="flex-1 outline-none" placeholder="Send your email" />
                                <IconSend size={24} />
                            </div> */}
                        </div>
                        <hr className="border-t border-neutral-500/10 w-[180px] lg:hidden mx-auto my-10" />

                        <div className="flex flex-col lg:flex-row gap-10 items-center">
                            {navItems.map((item, index) =>
                                item.path ? (
                                    <Link key={index} href={item.path} className="text-lg">
                                        {item.title}
                                    </Link>
                                ) : (
                                    <span key={index} className="text-lg">
                                        {item.title}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                    <hr className="border-t border-neutral-500/10 w-[180px] lg:hidden" />
                    <div className="space-y-10">
                        {contactItems.map((item, index) => (
                            <div key={index} className="flex items-start xs:items-center gap-2 justify-center lg:justify-start">
                                <div className="shrink-0">{item.icon}</div>
                                <span className={cn("text-lg break-words", item.color ? "text-secondary-500" : "")}>{item.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between pt-5 border-t border-neutral-500/20 z-20 relative flex-wrap gap-4">
                    <span className="text-neutral-500">
                        Copyright &copy; 2023 <span className="font-semibold text-primary-400">Sample</span>. All Rights Reserved.
                    </span>
                    <span className="text-neutral-700">Terms & Conditions</span>
                </div>
                <Image src={"/svg/footer-1.svg"} alt="" width={1520} height={327} className="absolute left-0 top-0 z-0" />
                <Image src={"/svg/footer-2.svg"} alt="" width={1521} height={312} className="absolute left-0 top-5 z-0" />
            </div>
        </div>
    );
};
export default Footer;
