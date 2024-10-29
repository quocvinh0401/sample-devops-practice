"use client";

import NewsCard from "@/components/layouts/news/NewsCard";
import CommonButton from "@/components/supports/CommonButton";
import GetInTouch from "@/components/supports/GetInTouch";
import { categories, news } from "@/mocks/news";
import { cn, formatTime } from "@/utils/utility";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import { useMemo, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import classes from "./News.module.css";

const News = () => {
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const md = useMediaQuery("(min-width: 62em");

    const changeCategory = (newCategory: string) => setCategory(newCategory);

    const buttons = useMemo(
        () => (
            <div className="flex gap-5">
                <button className="size-[60px] grid place-content-center rounded-full border border-primary-300">
                    <FaAngleLeft size={32} className="fill-primary-300" />
                </button>
                <button className="size-[60px] grid place-content-center rounded-full border border-primary-300">
                    <FaAngleRight size={32} className="fill-primary-300" />
                </button>
            </div>
        ),
        []
    );

    const getNews = () => {
        if (category == "All") return news.filter((_) => _.title.includes(search));
        else return news.filter((_) => _.category == category && _.title.includes(search));
    };

    const handleLoadMore = () => {};

    return (
        <main className="mt-[100px] space-y-[60px]">
            {/* introduction */}
            <section className="bg-primary-50 py-20 relative">
                <div className="bg-[url('/images/news/background-introduction.png')] absolute top-0 left-0 w-full h-full bg-center"></div>
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative gap-x-20 gap-y-10">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="px-5 py-2 rounded min-w-20 text-lg bg-primary-400 text-white uppercase">Technology</span>
                            <span>{formatTime(new Date())}</span>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-5xl text-white-950">AI-Powered Audio Transcriptions</h2>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
                                fringilla, mattis ligula consectetur, ultrices mauris.
                            </div>
                        </div>
                        {md && buttons}
                    </div>
                    <div className="w-full flex justify-center">
                        <Image
                            src={"/images/news/hero-introduction.jpg"}
                            alt="hero"
                            width={610}
                            height={400}
                            className="object-cover w-full max-w-[610px] md:min-w-[400px] rounded-[20px]"
                        />
                    </div>
                    {!md && buttons}
                </div>
            </section>

            <div className="container mx-auto space-y-[120px]">
                {/* news list */}
                <section>
                    <div className="flex justify-between items-end flex-wrap gap-6">
                        <div className={cn("p-3 rounded-lg bg-white-100 flex gap-6", classes.filters)}>
                            {/* TODO: find another way to responsive filters */}
                            {categories.map((_category) => (
                                <button key={_category} onClick={() => changeCategory(_category)}>
                                    <div className={cn("min-w-20 p-3 rounded-lg text-lg", _category == category && "bg-primary-400 text-white")}>
                                        {_category}
                                    </div>
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-3 border px-5 py-[14px] rounded-lg w-[295px]">
                            <BiSearchAlt size={24} className=" fill-white-500" />
                            <input
                                type="text"
                                placeholder="Search news"
                                className="outline-none placeholder:text-white-500"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-11 mt-20 mb-10">
                        {getNews().map((news) => (
                            <div key={news.id}>
                                <NewsCard news={news} />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <CommonButton text="Load More News" onClick={handleLoadMore} />
                    </div>
                </section>

                {/* get in touch */}
                <GetInTouch />
            </div>
        </main>
    );
};
export default News;
