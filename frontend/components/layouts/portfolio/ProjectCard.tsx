import Image from "next/image";
import Link from "next/link";

const ProjectCard = () => {
    return (
        <Link
            href={"/portfolio/1"}
            className="rounded-lg overflow-hidden border border-transparent hover:border-primary-400 hover:shadow-primary-30 transition-all duration-500"
        >
            <Image src={"/images/temp/project-2.png"} alt="" width={282} height={176} className="w-full lg:max-w-[282px] aspect-[282/176]" />
            <div className="bg-primary-100 px-[19px] py-[13px] space-y-1">
                <div className="text-white-500 uppercase">MARKETING</div>
                <div className="capitalize text-white-900">Sample Website 2024</div>
            </div>
        </Link>
    );
};
export default ProjectCard;
