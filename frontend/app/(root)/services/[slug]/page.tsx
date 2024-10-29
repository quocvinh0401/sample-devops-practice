import CommonButton from "@/components/supports/CommonButton";
import Container from "@/components/supports/Container";
import { ourServices, technologies } from "@/libraries/constants";
import { ServerProps } from "@/libraries/type";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({ params, searchParams }: ServerProps): Promise<Metadata> {
    const { slug } = params;

    const service = ourServices.find((s) => s.slug == slug)!;

    return {
        title: service.title,
    };
}

const ServiceDetail = ({ params }: ServerProps) => {
    const { slug } = params;

    const service = ourServices.find((s) => s.slug === slug);
    const _technologies = technologies.filter((t) => t.serviceId === service?.id);

    return (
        <main className="space-y-[120px]">
            {/* introduction */}
            <div className="bg-primary-50 pt-[180px] pb-[80px]">
                <div className="container mx-auto xl:flex items-end space-y-10">
                    <div className="bg-white flex-1 p-10 xl:p-20 rounded-[40px] xl:rounded-r-none">
                        <h1>{service?.title}</h1>
                        <div>{service?.description}</div>
                        <div className="mt-8 flex gap-6 flex-wrap">
                            {/* <CommonButton text="Learn more" icon={<IconCircleArrowUpRight size={24} color="white" />} path="/" /> */}
                            <CommonButton
                                text="Get in touch"
                                path="/contact"
                                // textColor="text-white-950"
                                // border="border border-white-950"
                                // background="bg-transparent"
                            />
                        </div>
                    </div>
                    <Image
                        src={service?.bg!}
                        width={489}
                        height={490}
                        alt=""
                        className="xl:max-w-[489px] w-full object-cover shadow-primary-30 rounded-t-[40px] rounded-br-[80px]"
                    />
                </div>
            </div>

            {/* technologies */}
            <div className="container mx-auto">
                <Container title="Our expertise" subtitle="We serve your technology stack">
                    <div className="flex justify-around items-center flex-wrap gap-10">
                        {_technologies.map((technology, index) => (
                            <div key={index}>
                                <Image src={technology.image} alt={`technology-${index}`} width={120} height={50} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* how it works */}
            <div className="bg-[#efefef80]">
                <div className="container py-[60px] grid sm:grid-cols-2 gap-[80px] mx-auto">
                    <div>
                        <div className="text-primary-400">How it works</div>
                        <h2 className="text-white-950 mt-8 mb-4">Get your project going in 3 steps</h2>
                        <div>{service?.definition}</div>
                    </div>
                    <div className="space-y-12">
                        {service?.steps?.map((step, index) => (
                            <div key={index} className="flex gap-6 items-start">
                                <div className="p-3 rounded-full bg-primary-50 shrink-0">
                                    <Image src={`/svg/service-detail/step-${index + 1}.svg`} width={40} height={40} alt={`step-${index + 1}`} />
                                </div>
                                <div className="space-y-3">
                                    <div className="text-xl">
                                        Step-{index + 1}: <span className="font-bold">{step.title}</span>
                                    </div>
                                    <div>{step.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* our recent projects */}
            {/* <div className="container mx-auto">
                <ProjectContainer title="Our recent projects" subtitle="Portfolio" more="View All Projects"></ProjectContainer>
            </div> */}

            {/* frequently asked question */}
            {/* <div className="flex gap-[60px] mx-auto container flex-col xl:flex-row items-center xl:items-start">
                <div className="relative max-w-[590px] w-full flex aspect-[590/522]">
                    <div className="w-full relative mt-[calc(11200%/590)] ml-[calc(6000%/590)] overflow-hidden rounded-[20px]">
                        <Image
                            src={"/images/about-us/question-2.png"}
                            width={530}
                            height={410}
                            alt=""
                            className="w-full max-w-[590px] max-h-[410px] object-cover aspect-[530/410]"
                        />
                        <ShadeLayer className="bg-shade-blue-20" />
                    </div>
                    <div className="w-full absolute top-0 left-0">
                        <div className="relative w-[calc(26300%/590)] aspect-[263/283] rounded-tl-[20px] overflow-hidden border-white border-r-[10px] border-b-[10px]">
                            <Image
                                src={"/images/about-us/question-1.png"}
                                width={263}
                                height={283}
                                alt=""
                                className="w-full max-w-[263px] aspect-[263/283] object-cover"
                            />
                            <ShadeLayer className="bg-shade-blue-20 z-10" />
                        </div>
                    </div>
                </div>
                <Question />
            </div> */}
        </main>
    );
};
export default ServiceDetail;
