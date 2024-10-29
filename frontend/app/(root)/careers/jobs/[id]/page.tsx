"use client";

import JobCard from "@/components/layouts/jobs/JobCard";
import CommonButton from "@/components/supports/CommonButton";
import { timeModeDictionary } from "@/libraries/dictionary";
import { TimeMode } from "@/libraries/type";
import { jobs } from "@/mocks/jobs";
import { formatTime } from "@/utils/utility";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { MdAlarm } from "react-icons/md";
import classes from "./JobDetail.module.css";
import ApplyForm from "@/components/supports/ApplyForm";
import Modal from "@/components/supports/Modal";

interface JobDetailProps {
    params: {
        id: string;
    };
}

const JobDetail = ({ params }: JobDetailProps) => {
    const [openModal, setOpenModal] = useState(false);

    const job = jobs.find((j) => j.id == +params.id);

    const infos = [
        { icon: "/svg/careers/cash.svg", title: "Salary range", content: `VND ${job?.salaryRange[0]} - ${job?.salaryRange[1]} million` },
        { icon: "/svg/careers/location-outline.svg", title: "Location", content: job?.location },
        { icon: "/svg/careers/suitcase-outline.svg", title: "Department", content: job?.department },
    ];

    const relatedJobs = useMemo(() => {
        return jobs.slice(0, 4);
    }, []);

    const handleApply = () => {};

    const handleToggleModal = useCallback(() => setOpenModal(!openModal), [openModal]);

    return (
        <main className="pt-[160px] pb-[60px] bg-[url('/images/news/background-introduction.png')] bg-primary-50">
            <div className="container mx-auto">
                <section className="space-y-[60px]">
                    <Link href={"/careers/jobs"} className="flex items-center gap-2">
                        <FaArrowLeft size={24} className="fill-white-700" />
                        <span className="text-white-700 text-lg font-medium">Back To Jobs</span>
                    </Link>
                    <div className="flex flex-col sm:flex-row justify-between bg-white p-5 rounded-[20px] gap-8 flex-wrap">
                        <div className="flex-1 flex flex-col justify-between gap-[27px] max-w-[828px]">
                            <div className="text-[32px] font-semibold">{job?.title}</div>
                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                {infos.map((info) => (
                                    <div key={info.title} className="flex gap-4 items-center">
                                        <div className="p-3 rounded-full bg-primary-50 shrink-0">
                                            <Image src={info.icon} alt="" width={24} height={24} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white-500">{info.title}</span>
                                            <span className="font-semibold">{info.content}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-col-reverse justify-between gap-[27px]">
                            <div className="space-y-2 sm:text-end">
                                <span className="text-white-700 font-medium text-lg">
                                    {job?.isRemote && "Remote | "} {timeModeDictionary(job?.timeMode ?? TimeMode.FULL_TIME)}
                                </span>
                                <div className="flex gap-1">
                                    <MdAlarm size={20} className="fill-white-500" />
                                    <div className="space-x-0.5">
                                        <span className="text-white-500">End Date:</span>{" "}
                                        <span className="font-bold">{formatTime(job?.endedDate ?? new Date(), 1)}</span>
                                    </div>
                                </div>
                            </div>
                            <CommonButton
                                onClick={handleToggleModal}
                                text="Apply Now"
                                icon={<Image src={"/svg/careers/paper-plane.svg"} alt="paper-plane" width={24} height={24} />}
                                className="flex-row-reverse px-6 rounded-lg w-full flex justify-center"
                            />
                        </div>
                    </div>
                </section>
                <section className="flex flex-col md:flex-row gap-8 justify-between mt-[60px]">
                    <div className="flex-1 bg-white px-5 py-10 rounded-[20px] space-y-10">
                        <div dangerouslySetInnerHTML={{ __html: job?.content ?? "" }} className={classes.detail}></div>
                        <CommonButton
                            onClick={handleToggleModal}
                            text="Apply Now"
                            icon={<Image src={"/svg/careers/paper-plane.svg"} alt="paper-plane" width={24} height={24} />}
                            className="flex-row-reverse px-6 rounded-lg w-full flex justify-center"
                        />
                    </div>
                    <div className="md:w-[340px] px-5 py-10 rounded-[20px] bg-white space-y-8 h-fit">
                        <div className="space-y-2">
                            <span className="text-2xl font-semibold">Related Jobs</span>
                            <div className="h-1 w-[calc(11363%/340)] max-w-[100px] rounded-lg bg-secondary-500"></div>
                        </div>
                        <div className="gap-5 grid xs:grid-cols-2 md:grid-cols-1">
                            {relatedJobs.map((job) => (
                                <JobCard job={job} key={job.id} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {openModal && (
                <Modal>
                    <ApplyForm position={job?.title ?? ""} onCancel={handleToggleModal} />
                </Modal>
            )}
        </main>
    );
};
export default JobDetail;
