import Reason from "@/components/layouts/service/reason/Reason";
import CommonButton from "@/components/supports/CommonButton";
import GetInTouch from "@/components/supports/GetInTouch";
import { introduceServicePage, ourServiceDescription, ourServices, serviceIcons } from "@/libraries/constants";
import { IconCheck, IconCircleArrowRightFilled, IconCircleArrowUpRight } from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Services",
};

const Service = () => {
    return (
        <main className="space-y-[120px]">
            {/* introduction */}
            <div className="bg-primary-50 pt-[100px]">
                <div className="mx-auto container relative py-20 xl:py-[160px] flex flex-col items-center gap-10 xl:items-start">
                    <div>
                        <h1 className="text-primary-400">All of Services</h1>
                        <div className="xl:max-w-[50%]">{introduceServicePage}</div>
                        <div className="flex flex-wrap gap-6 mt-8 ">
                            {/* <CommonButton text="Learn more" icon={<IconCircleArrowUpRight color="white" size={24} />} path="/" /> */}
                            <CommonButton
                                text="Get in touch"
                                path="/contact"
                                // background="bg-transparent"
                                // border="border border-white-950"
                                // textColor="text-white-950"
                            />
                        </div>
                    </div>
                    {/* <div className=" overflow-hidden"> */}
                    <Image
                        src={"/images/service/intro-1.jpg"}
                        width={710}
                        height={585}
                        alt=""
                        className="max-w-[710px] w-full xl:h-[585px] object-cover border-2 border-primary-400 xl:absolute right-0 top-[80px] rounded-tl-[40px] rounded-bl-[80px]"
                    />
                    {/* </div> */}
                </div>
            </div>

            {/* list services */}
            <div className="mx-auto container mt-[41px] relative">
                <div className="mb-8">
                    <span className="sub-title mb-2">{ourServiceDescription}</span>
                    <h2 className="text-white-950">Our Services</h2>
                </div>
                <div className="relative flex gap-10 flex-col">
                    <Image src={"/images/service/list.png"} width={605} height={587} alt="" className="md:-translate-x-[100px]" />
                    <div className="flex gap-x-5 gap-y-7 md:absolute right-0 bottom-3 justify-end z-10 relative flex-col md:flex-row">
                        {ourServices.map((service, index) => (
                            <div
                                key={index}
                                className="flex flex-col p-5 rounded-[40px] transition-all ease-in group duration-300 shadow-neutral-10 hover:-translate-y-5 space-y-5 bg-white md:max-w-[375px] border border-transparent hover:border-primary-400 hover:shadow-primary-30"
                            >
                                <Image src={serviceIcons[index]} alt="" width={32} height={32} />
                                <div className="pb-5 flex-1">
                                    <h3 className="text-[32px] font-semibold">{service.title}</h3>
                                    <div>{service.description}</div>
                                    <ul className="mt-4">
                                        {service.children.map((child, indexChild) => (
                                            <li className="flex gap-2" key={indexChild}>
                                                <IconCheck size={20} color="#525252" className="mt-0.5" />
                                                <span>{child}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link href={`/services/${service.slug}`}>
                                    <IconCircleArrowRightFilled
                                        color="#525252"
                                        size={32}
                                        className="transition-all duration-300 ml-auto group-hover:-rotate-[20deg]"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* reason */}
            {/* TODO: how to identify distance from this component to below component */}
            {/* <div className="">
                <Reason />
            </div> */}

            <div className="mx-auto container space-y-[120px] relative">
                {/* latest case */}
                {/* <ProjectContainer title="Portfolio" subtitle="Our recent projects" more="View all projects" /> */}

                {/* get in touch */}
                <GetInTouch />
            </div>
        </main>
    );
};
export default Service;
