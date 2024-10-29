"use client";

import NewsCard from "@/components/layouts/news/NewsCard";
import CarouselComponent from "@/components/supports/CarouselComponent";
import CommonButton from "@/components/supports/CommonButton";
import Container from "@/components/supports/Container";
import GetInTouch from "@/components/supports/GetInTouch";
import { news } from "@/mocks/news";
import { formatTime } from "@/utils/utility";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { MdAlarm } from "react-icons/md";
import classes from "./NewsDetail.module.css";

interface Params {
    params: {
        id: string;
    };
}

const NewsDetail = ({ params }: Params) => {
    const newsDetail = news.find((n) => n.id == +params.id);
    return (
        <main className="mt-[100px] pt-10 relative">
            <div className="bg-[url('/images/news/background-introduction.png')] absolute top-0 left-0 w-full h-full bg-center"></div>
            <div className="relative space-y-[120px]">
                <section className="max-w-[1040px] mx-auto px-4 xs:px-10 md:px-[100px]">
                    <Link href={"/news"} className="flex items-center gap-2 pb-[60px]">
                        <FaArrowLeft size={24} className="fill-primary-400" />
                        <span className="text-primary-400 text-lg font-medium">Back To News</span>
                    </Link>
                    <div className="uppercase text-lg font-medium">{newsDetail?.category}</div>
                    <h1 className="mt-4 mb-2">{newsDetail?.title}</h1>
                    <div className="flex items-center gap-2 mb-8">
                        <MdAlarm size={20} className="fill-white-700" />
                        <span className="text-white-700 font-medium">{formatTime(newsDetail?.createdAt ?? new Date())}</span>
                    </div>
                    <div className={classes.content} dangerouslySetInnerHTML={{ __html: newsDetail?.content ?? "" }}></div>
                </section>
                <section className="container mx-auto space-y-[120px] ">
                    <Container title="Related News">
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
                    </Container>
                    <GetInTouch />
                </section>
            </div>
        </main>
    );
};
export default NewsDetail;
