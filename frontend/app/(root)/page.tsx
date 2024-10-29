"use client";

import ImageContainer from "@/components/layouts/home/ImageContainer";
import CommonButton from "@/components/supports/CommonButton";
import Container from "@/components/supports/Container";
import DiscussForm from "@/components/supports/DiscussForm";
import ShadeLayer from "@/components/supports/ShadeLayer";
import { introduceHomePage, mechanisms, ourServices, reasonItems, serviceIcons } from "@/libraries/constants";
import { IconCircleArrowUpRight, IconCircleChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="mt-[120px]">
            <div className="relative mb-11 pt-10 pb-20 overflow-hidden min-h-[600px] bg-[url('/images/bg-home.jpg')] bg-center bg-cover grid place-content-center">
                <ShadeLayer className="bg-gradient-to-r from-[rgba(12,37,85,0.8)] to-[rgba(24,43,81,0)] mix-blend-multiply " />
                <div className="relative z-20 h-full top-0 left-0 flex justify-center">
                    <div className="container flex justify-center ">
                        <div className="sm:max-w-[850px]">
                            <h1 className="text-white text-center text-balance">Accelerating Your Digital Journey</h1>
                            <div className="text-white text-lg mt-2 mb-[60px]">{introduceHomePage}</div>
                            <CommonButton
                                text="Explore More"
                                icon={<IconCircleArrowUpRight color="white" />}
                                className="scroll-smooth mx-auto"
                                path="#explore"
                            />
                        </div>
                    </div>
                </div>
                {/* TODO: need to improve UI curve lines on mobile */}
                <div className="absolute bottom-0 left-0 w-full clip-path-wave-polygon bg-primary-400 h-40"></div>
                <div className="absolute -bottom-2 left-0 w-full clip-path-wave-polygon bg-white h-40 z-10"></div>
            </div>
            <div className="space-y-[120px]">
                <div className="container mx-auto space-y-[120px]" id="explore">
                    {/* our services */}
                    <Container title="What we are offering" subtitle="Feel free to contact us for any questions!">
                        {/* <CarouselComponent>
                            {ourServices.map((service, index) => (
                                <Carousel.Slide key={index}>
                                    <Link href={`/services/${service.id}`}>
                                        <div className="group flex flex-col items-center justify-between gap-5 px-[22px] py-10 rounded-lg border-transparent hover:bg-white hover:border-primary-400 hover:shadow-primary-30 bg-primary-50 border-2">
                                            <div className="flex flex-col items-center">
                                                {iconService(index)}
                                                <div className="mt-5 mb-2 text-xl font-semibold capitalize">{service.title}</div>
                                                <div className="text-center mb-5">{service.description}</div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl font-semibold group-hover:text-primary-400">See detail</span>
                                                <IconCircleChevronRight size={24} className="group-hover:stroke-primary-400" />
                                            </div>
                                        </div>
                                    </Link>
                                </Carousel.Slide>
                            ))}
                        </CarouselComponent> */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {ourServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center justify-between gap-5 px-[22px] py-10 rounded-lg border-transparent hover:bg-white hover:border-primary-400 hover:shadow-primary-30 bg-primary-50 border-2"
                                >
                                    <div className="flex flex-col items-center">
                                        <Image src={serviceIcons[index]} alt="" width={60} height={60} />
                                        <div className="mt-5 mb-2 text-xl font-semibold capitalize">{service.title}</div>
                                        <div className="text-center mb-5">{service.description}</div>
                                    </div>
                                    <Link href={`/services/${service.slug}`} className="flex items-center gap-2">
                                        <span className="text-xl font-semibold group-hover:text-primary-400">See detail</span>
                                        <IconCircleChevronRight size={24} className="group-hover:stroke-primary-400" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </Container>

                    {/* Why clients choose us */}
                    <Container title="Why clients choose us" subtitle="Because it’s good to work with good people!">
                        <div className="grid xs:grid-cols-2 gap-5">
                            {reasonItems.map((reason, index) => (
                                <div
                                    key={index}
                                    className="p-5 shadow-neutral-20 rounded-lg hover:shadow-primary-30 border border-transparent hover:border-primary-400"
                                >
                                    <div className="flex gap-4 items-center">
                                        <div className="relative pb-1">
                                            {reason.icon}
                                            <div className="size-8 absolute bg-primary-100 -right-1 bottom-0 -z-10 rounded-full"></div>
                                        </div>
                                        <div className="text-xl font-semibold">{reason.title}</div>
                                    </div>
                                    <p>{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </Container>

                    {/* Our recent projects */}
                    {/* <Container title="Our recent projects" subtitle="Portfolio" position="left" more="View All Projects">
                        <CarouselComponent>
                            {projectItems.map((project, index) => (
                                <Carousel.Slide key={index}>
                                    <div className="pb-1">
                                        <div className="rounded-lg border border-transparent hover:border-primary-400 shadow-neutral-20 hover:shadow-primary-30">
                                            <div className={cn("px-10 pt-10", project.backgroundColor ? project.backgroundColor : "")}>
                                                <div className="relative w-full">
                                                    <Image src={project.backgroundImage} width={320} height={246} alt={project.title} />
                                                </div>
                                            </div>
                                            <div className="text-center p-5 space-y-2">
                                                <div className="text-lg font-semibold">{project.title}</div>
                                                <div>{project.type}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Slide>
                            ))}
                        </CarouselComponent>
                    </Container> */}
                </div>

                {/* join us */}
                {/* <div className="flex justify-center bg-gradient-to-r from-primary-50 from-50% to-primary-200 to-50%">
                    <div className="w-full container bg-primary-50 py-[30px] relative">
                        <div className="flex justify-between flex-col sm:flex-row items-center gap-10 md:gap-[120px] relative z-10">
                            <div>
                                <div className="text-[32px] font-semibold text-primary-400 leading-11">Join our team</div>
                                <div className="text-black mt-2 mb-10 leading-4">{joinHomePage}</div>
                                <button className="flex items-center gap-2 px-6 h-[52px] border rounded border-primary-400">
                                    <span className="text-xl font-semibold text-primary-400">Join us</span>
                                    <IconConfetti size={24} color="#F19A34" />
                                </button>
                            </div>
                            <Image src={"/images/join-us-home.png"} alt="join-us" width={393} height={268} className="" />
                        </div>
                        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
                            <Image src={"/svg/join-us-line-1.svg"} width={710} height={328} alt="line-1" className="right-5 bottom-0 absolute" />
                            <Image src={"/svg/join-us-line-2.svg"} width={710} height={328} alt="line-2" className="right-0 bottom-0 absolute" />
                            <Image src={"/svg/join-us-arrow-left.svg"} width={63} height={37} alt="arrow-left" className="top-[29px] left-[19px] absolute" />
                            <Image src={"/svg/join-us-arrow-up.svg"} width={32} height={57} alt="arrow-up" className="bottom-[65px] left-[676px] absolute" />
                            <Image src={"/svg/join-us-circle-1.svg"} width={136} height={239} alt="circle-1" className="right-6 top-[78px] absolute" />
                            <Image
                                src={"/svg/join-us-circle-2.svg"}
                                width={37}
                                height={37}
                                alt="circle-2"
                                className="bottom-[67px] -right-2 absolute h-[37px] w-[37px]"
                            />
                        </div>
                    </div>
                </div> */}

                {/* how it works */}
                <ImageContainer title="How it works" subtitle="Process" image="/svg/surround-image.svg">
                    <div className="space-y-10 lg:ml-[65px]">
                        {mechanisms.map((mechanism, index) => (
                            <div key={index} className="flex gap-5 relative group">
                                <div className="shrink-0 text-2xl size-[60px] flex items-center justify-center rounded-full border border-white-700 group-hover:border-primary-400">
                                    {index + 1}
                                </div>
                                <div className="space-y-2">
                                    {mechanism.icon}
                                    <div className="text-2xl font-semibold group-hover:text-primary-400">{mechanism.title}</div>
                                    <div className="">{mechanism.description}</div>
                                </div>
                                {index != mechanisms.length - 1 && (
                                    <div className="absolute top-16 h-[calc(100%-30px)] left-[30px] z-10 border-r border-primary-400 w-0.5 border-dashed">
                                        {/* <Divider variant="dotted" orientation="vertical" color="#F19A34" className="relative !h-full" /> */}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </ImageContainer>
                <div className="container mx-auto space-y-[120px]">
                    {/* Discuss */}
                    <DiscussForm />

                    {/* News */}
                    {/* <Container title="News">
                        <CarouselComponent>
                            {news.map((item, index) => (
                                <Carousel.Slide key={index}>
                                    <div className="pb-1">
                                        <NewsCard news={item} />
                                    </div>
                                </Carousel.Slide>
                            ))}
                        </CarouselComponent>
                        <div className="flex justify-center mt-10">
                            <CommonButton text="View All News" path="/news" />
                        </div>
                    </Container> */}

                    {/* technologies */}
                    {/* TODO: how to align wrapping flex item center when using justify-content: space-between */}
                    {/* <Container title="Our expertises" subtitle="Tools ">
                        <div className="flex justify-around items-center flex-wrap gap-10">
                            {technologies.map((technology, index) => (
                                <div key={index}>
                                    <Image src={technology.image} alt={`technology-${index}`} width={0} height={0} style={{ width: "100%", height: "auto" }} />
                                </div>
                            ))}
                        </div>
                    </Container> */}
                </div>
            </div>
        </main>
    );
}
