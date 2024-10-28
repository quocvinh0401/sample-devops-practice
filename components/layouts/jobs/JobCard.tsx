import { timeModeDictionary } from "@/libraries/dictionary";
import { Job } from "@/libraries/type";
import Image from "next/image";
import Link from "next/link";

interface JobCardProps {
    job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
    return (
        <Link
            href={`/careers/jobs/${job.id}`}
            className="shadow-neutral-10 rounded-[20px] p-5 flex flex-col text-start border border-transparent hover:border-primary-400 transition-colors duration-300 gap-2"
        >
            <div className="flex-1 space-y-4">
                <div className="text-lg font-medium">{job.title}</div>
                <div>{`${job.isRemote && "Remote | "}${timeModeDictionary(job.timeMode)}`}</div>
            </div>
            <div className="flex gap-1">
                <Image src={"/svg/careers/location.svg"} width={16} height={16} alt="location" />
                <span className="font-medium">{job.location}</span>
            </div>
        </Link>
    );
};
export default JobCard;
