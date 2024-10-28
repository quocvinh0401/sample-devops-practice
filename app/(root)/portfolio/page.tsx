"use client";

import ProjectCard from "@/components/layouts/portfolio/ProjectCard";
import DiscussForm from "@/components/supports/DiscussForm";
import { FILTER_ALL, introductionPortfolio } from "@/libraries/constants";
import { categories } from "@/mocks/portfolio";
import { cn } from "@/utils/utility";
import { Pagination } from "@mantine/core";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import classes from "./Portfolio.module.css";

const Portfolio = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const currentCategory = searchParams.get("category") ?? FILTER_ALL;
    const currentPage = +searchParams.get("page")! ?? 1;

    return (
        <main className="mt-[160px] container mx-auto space-y-[120px]">
            <section>
                <div>
                    <h1 className="text-primary-400">Our best Works</h1>
                    <p className="text-lg text-white-700">{introductionPortfolio}</p>
                </div>
                <div className="mt-20 mb-[60px] md:flex gap-20 justify-between">
                    <div className="space-y-5">
                        {/* TODO: responsive on mobile */}
                        <p className="text-2xl font-semibold">Categories</p>
                        <ul className="space-y-1">
                            {categories.map((category) => (
                                <li key={category.title} className="py-2">
                                    <Link
                                        href={`?category=${category.title}&page=${currentPage}`}
                                        className={cn(
                                            "flex gap-2 items-center pl-10 border-l w-full",
                                            currentCategory == category.title ? "border-primary-400" : "border-transparent"
                                        )}
                                    >
                                        <category.icon
                                            size={24}
                                            className={cn(
                                                currentCategory == category.title ? "fill-primary-400 stroke-primary-400" : "fill-white-700 stroke-white-700"
                                            )}
                                        />
                                        <span
                                            className={cn(
                                                "text-xl flex-1 text-start",
                                                currentCategory == category.title ? "text-primary-400" : "text-white-700"
                                            )}
                                        >
                                            {category.title}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid xs:grid-cols-2 lg:grid-cols-3 gap-10">
                        {Array(20)
                            .fill(0)
                            .map((item, index) => (
                                <ProjectCard key={index} />
                            ))}
                    </div>
                </div>
                <div className="flex justify-center">
                    {/* TODO: responsive on mobile */}
                    <Pagination
                        total={20}
                        size={"lg"}
                        boundaries={1}
                        siblings={1}
                        radius={"xl"}
                        defaultValue={currentPage}
                        classNames={{
                            control: classes.control,
                            dots: classes.dots,
                        }}
                        previousIcon={FaAngleLeft}
                        nextIcon={FaAngleRight}
                        onChange={(page) => router.push(`?category=${currentCategory}&page=${page}`)}
                    />
                </div>
            </section>
            <DiscussForm />
        </main>
    );
};
export default Portfolio;
