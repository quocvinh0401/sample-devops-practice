"use client";

import JobCard from "@/components/layouts/jobs/JobCard";
import CommonButton from "@/components/supports/CommonButton";
import { FILTER_ALL, locations } from "@/libraries/constants";
import { jobs } from "@/mocks/jobs";
import { Select } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import classes from "./Jobs.module.css";

const Jobs = () => {
    const [location, setLocation] = useState(FILTER_ALL);

    const getJobs = () => {
        return location === FILTER_ALL ? jobs : jobs.filter((job) => job.location === location);
    };

    const handleChangeLocation = (value: string | null) => {
        setLocation(value ?? "");
    };

    const handleChangeDepartment = (value: string | null) => {};

    const handleSearch = () => {};

    return (
        <section className="mt-[100px] bg-white-100/30">
            <div className="py-[60px]">
                <div className="container mx-auto space-y-[60px]">
                    <h2 className="text-5xl text-center">We Are Hiring</h2>
                    <div className="my-[60px] space-y-10">
                        <div className="flex justify-between items-center flex-wrap gap-5">
                            <div className="flex gap-4">
                                <Select
                                    onChange={(value) => handleChangeLocation(value)}
                                    searchable
                                    placeholder="Location"
                                    data={[FILTER_ALL, ...locations]}
                                    leftSection={<Image src={"/svg/careers/location.svg"} alt="location" width={24} height={24} />}
                                    rightSection={<IoIosArrowDown size={24} className="fill-white-500" />}
                                    classNames={{ input: classes.input, section: classes.section }}
                                />
                                <Select
                                    // onChange={(value) => handleChangeDepartment(value)}
                                    placeholder="Department"
                                    leftSection={<Image src={"/svg/careers/suitcase.svg"} alt="suitcase" width={24} height={24} />}
                                    rightSection={<IoIosArrowDown size={24} className="fill-white-500" />}
                                    classNames={{ input: classes.input, section: classes.section }}
                                />
                            </div>
                            <div className="flex gap-4">
                                <div className="flex gap-5 items-center bg-white border-[1.5px] border-secondary-500 px-5 py-[11px] rounded-full">
                                    <input type="text" placeholder="Front-end developer" className="outline-none max-w-[266px] w-full" />
                                    <BiSearchAlt size={24} className="fill-secondary-500 shrink-0" />
                                </div>
                                <CommonButton text="Search Jobs" background="bg-secondary-100" borderRadius="rounded-full" textColor="text-secondary-500" />
                            </div>
                        </div>
                        <div className="bg-white flex flex-col items-center gap-10 p-10 rounded-[40px] shadow-neutral-10">
                            <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 auto-rows-[1fr]">
                                {getJobs().map((job) => (
                                    <JobCard job={job} key={job.id} />
                                ))}
                            </div>
                            <CommonButton text="See More" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Jobs;
