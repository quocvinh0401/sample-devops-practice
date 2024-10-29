import CommonButton from "@/components/supports/CommonButton";
import { benefits, careersIntroduction, exploreDescription, ourValues, ourValuesDescription } from "@/libraries/constants";
import { cn } from "@/utils/utility";
import Image from "next/image";
import { TbCircleArrowUpRight } from "react-icons/tb";

const Careers = () => {
    return (
        <main className="mt-[160px] pb-0">
            {/* introduction */}
            <section className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-20 items-center">
                    <div className="space-y-10">
                        <div>
                            <h1>Get your dream jobs with Sample</h1>
                            <span>{careersIntroduction}</span>
                        </div>
                        <CommonButton text="Explore All Jobs" icon={<TbCircleArrowUpRight size={24} className="stroke-white" />} path="/careers/jobs" />
                    </div>
                    <div className="md:w-full md:min-w-[400px]">
                        <Image src={"/images/careers/introduction.jpg"} alt="introduction" width={610} height={317} className="object-cover rounded-[20px]" />
                    </div>
                </div>
            </section>

            {/* key benefits */}
            <section className="relative py-[180px] mt-[61px]">
                <Image src={"/images/careers/background-wave.png"} alt="" fill sizes="100%" className="w-full h-full" />
                <div className="relative container mx-auto space-y-20">
                    <div className="space-y-10">
                        {benefits.map((benefit, index) => (
                            <div
                                key={benefit.title}
                                className={cn(
                                    "flex flex-col md:flex-row items-center space-between gap-y-6 gap-x-[160px]",
                                    index % 2 != 1 && "md:flex-row-reverse"
                                )}
                            >
                                <div>
                                    <h2 className="text-white-950">{benefit.title}</h2>
                                    <span>{benefit.description}</span>
                                </div>
                                <div className="relative md:w-full md:max-w-[calc(61000%/1240)] aspect-[610/350] shrink-0">
                                    <Image
                                        src={`/images/careers/key-benefit-${index + 1}.jpg`}
                                        alt={benefit.title}
                                        width={610}
                                        height={350}
                                        className="aspect-[610/350] rounded-[20px] object-cover mb-[calc(8000%/610)]"
                                    />
                                    <div className="absolute bottom-0 right-[calc(8000%/610)] rounded-[20px] p-5  bg-secondary-400 w-[calc(16000%/610)]">
                                        <Image src={benefit.icon} alt="" width={120} height={120} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-10">
                        <div className="space-y-2">
                            <h2 className="text-white-950">Our values</h2>
                            <span className="text-white-700">{ourValuesDescription}</span>
                        </div>
                        <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-y-10">
                            {ourValues.map((value) => (
                                <div key={value.title} className="flex items-start gap-5 border-t border-dashed border-primary-200 pt-5 pr-[10px]">
                                    <Image src={value.icon} alt="" width={32} height={32} className="w-auto h-auto" />
                                    <div className="space-y-2">
                                        <div className="text-2xl font-semibold">{value.title}</div>
                                        <span>{value.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* explore */}
            <section className="container mx-auto my-20">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-20">
                    <div className="space-y-10 sm:max-w-[403px]">
                        <div className="space-y-2">
                            <div className="text-5xl font-bold">Explore job opportunities</div>
                            <span>{exploreDescription}</span>
                        </div>
                        <CommonButton text="Explore All Jobs" icon={<TbCircleArrowUpRight size={24} className="stroke-white" />} />
                    </div>
                    <div>
                        <Image src={"/images/careers/explore.png"} alt="explore" width={539} height={406} />
                    </div>
                </div>
            </section>
        </main>
    );
};
export default Careers;
