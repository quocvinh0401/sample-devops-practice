import CommonButton from "@/components/supports/CommonButton";
import GetInTouch from "@/components/supports/GetInTouch";
import ShadeLayer from "@/components/supports/ShadeLayer";
import { project } from "@/mocks/portfolio";
import Image from "next/image";
import { MdAlarm } from "react-icons/md";
import { TbCircleArrowRight } from "react-icons/tb";

const PortfolioDetail = () => {
    const aboutStats = [
        { data: project.exercise, text: "evidence-backed interactive exercises" },
        { data: project.trafficIncrease, text: "traffic increase with our services" },
        { data: project.clinic, text: "clinics working with health" },
    ];

    return (
        <main className="mt-[100px] space-y-[120px]">
            <section
                className="bg-no-repeat bg-cover bg-center py-[60px] min-h-[600px] flex items-end relative"
                style={{
                    backgroundImage: `url(${project.thumbnail})`,
                }}
            >
                <ShadeLayer className="bg-[rgba(31,31,31,0.4)]" />
                <div className="container mx-auto space-y-[120px] relative">
                    <div className="text-5xl font-semibold text-white text-center md:text-start md:max-w-[60%] uppercase">
                        The Variable — interactive design for those who fight indifference
                    </div>
                    <div className="pt-8 border-t border-white flex flex-col xs:flex-row justify-between items-center gap-5">
                        <div className="flex items-center gap-1">
                            <MdAlarm size={24} className="fill-white" />
                            <span className="text-lg font-medium text-white">2024</span>
                        </div>
                        <span className="uppercase text-white">{project.category}</span>
                        <span className="uppercase text-white">time frame: {project.timeFrame}</span>
                    </div>
                </div>
            </section>
            <div className="container mx-auto mt-20 space-y-[120px]">
                <section className="space-y-20">
                    <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-[120px]">
                        <div className="text-secondary-500 text-[32px] font-semibold">Service we provided</div>
                        <div className="flex flex-col md:flex-row gap-5 md:gap-[60px]">
                            <div className="grid gap-2">
                                <span className="text-white-900 font-medium uppercase">Problem</span>
                                <p className="text-white-500 text-xl font-medium">{project.problemText}</p>
                            </div>
                            <div className="h-[2px] w-full md:w-[2px] md:h-full bg-primary-100"></div>
                            <div className="grid gap-2">
                                <span className="text-white-900 font-medium uppercase">Solution</span>
                                <p className="text-white-500 text-xl font-medium">{project.solutionText}</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-[60px]">
                        <div className="flex flex-col sm:flex-row sm:items-end gap-5">
                            <div className="flex-1">
                                <div className="text-secondary-500 text-[32px] font-semibold">
                                    About the <br />
                                    Project
                                </div>
                                <p>{project.aboutText}</p>
                            </div>
                            <div className="flex-1 flex sm:justify-end">
                                <CommonButton text="Go to website" icon={<TbCircleArrowRight size={24} className="stroke-white" />} path={project.website} />
                            </div>
                        </div>
                        <div className="space-y-10">
                            <Image
                                src={project.aboutImage}
                                height={600}
                                width={1034}
                                alt=""
                                className="max-w-[1034] aspect-[1034/600] object-cover object-top mx-auto rounded-[40px]"
                            />
                            <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-5 auto-rows-fr">
                                {aboutStats.map((stat) => (
                                    <div key={stat.text} className="bg-primary-400 p-[1px] clip-path-cut-corner-portfolio rounded-lg overflow-hidden">
                                        <div className="space-y-5  gap-5 p-5 bg-white clip-path-cut-corner-portfolio h-full rounded-lg">
                                            <div className="text-primary-500 text-[40px] font-semibold">{stat.data}</div>
                                            <p className="text-white-700">{stat.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* features */}
                    <div className="space-y-[60px]">
                        <div className="text-center">
                            <h2>Key Features</h2>
                            <p className="text-white-700">{project.features.description}</p>
                        </div>
                        <div className="space-y-[60px]">
                            {project.features.children.map((feature) => (
                                <div key={feature.title} className="flex flex-col md:flex-row justify-between items-center gap-[77px] even:md:flex-row-reverse">
                                    <div className="space-y-5 shrink-[2]">
                                        <h2 className="text-white-700 capitalize">{feature.title}</h2>
                                        <div>{feature.description}</div>
                                    </div>
                                    <div className="w-full max-w-[658px]">
                                        <Image
                                            src={feature.image}
                                            alt=""
                                            width={658}
                                            height={490}
                                            className="max-w-[658px] w-full lg:w-auto aspect-[658/490] object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <GetInTouch />
            </div>
        </main>
    );
};
export default PortfolioDetail;
