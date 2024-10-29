import AboutIntroduction from "@/components/layouts/about-us/AboutIntroduction";
import ImageContainer from "@/components/layouts/home/ImageContainer";
import Container from "@/components/supports/Container";
import GetInTouch from "@/components/supports/GetInTouch";
import Question from "@/components/supports/Question";
import ShadeLayer from "@/components/supports/ShadeLayer";
import { guarantees, missions, teams } from "@/libraries/constants";
import { technologies } from "@/mocks";
import { IconCircleCheck, IconThumbUp } from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us",
};

const AboutUs = () => {
    return (
        <main className="space-y-[120px] mt-[100px]">
            <div className="container mx-auto space-y-[120px]">
                {/* about */}
                <div className="pt-[47px]">
                    <AboutIntroduction />
                </div>

                {/* technologies */}
                {/* TODO: how to align wrapping flex item center when using justify-content: space-between */}
                {/* <Container title="Our expertises" subtitle="Tools ">
                    <div className="flex justify-around items-center flex-wrap gap-10">
                        {technologies.map((technology, index) => (
                            <div key={index}>
                                <Image src={technology.image} alt={`technology-${index}`} width={0} height={0} style={{ width: "100%", height: "auto" }} />
                            </div>
                        ))}
                    </div>
                </Container> */}
            </div>
            {/* mission & vision */}
            <ImageContainer title="Mission & Vision" image="/images/about-us/mission-vision.png">
                <div className="space-y-10">
                    {missions.map((mission, index) => (
                        <div key={index} className="flex gap-5 p-5 border border-primary-300 rounded-[20px]">
                            <div>{mission.icon}</div>
                            <div>
                                <div className="mb-2 text-2xl font-semibold text-primary-400">{mission.title}</div>
                                {mission.children ? (
                                    <ol className="space-y-[14px]">
                                        {mission.children.map((c, i) => (
                                            <li key={i} className="flex gap-2">
                                                <IconThumbUp size={24} className="shrink-0" />
                                                <span>{c}</span>
                                            </li>
                                        ))}
                                    </ol>
                                ) : (
                                    <div>{mission.description}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </ImageContainer>

            {/* our team */}
            {/* <div className="bg-secondary-950">
                <div className="relative container mx-auto">
                    <div className="text-center py-[80px] space-y-12 relative z-10">
                        <h2 className="text-white">Our Team</h2>
                        <div className="grid xs:grid-cols-2 md:grid-cols-3 place-items-center gap-10 lg:gap-[71px]">
                            {teams.map((team, index) => (
                                <div key={index} className="text-start flex flex-col max-w-[366px]">
                                    <div className="text-xl font-semibold bg-primary-400 text-white w-fit py-2 px-10 clip-path-trapezoid-polygon ml-4">
                                        {team.name}
                                    </div>
                                    <div className="rounded-[20px] overflow-hidden">
                                        <div className="relative">
                                            <Image src={team.background} alt={team.name} width={366} height={200} className="relative w-full object-cover" />
                                            <ShadeLayer className="bg-shade-blue-10" />
                                        </div>
                                        <div className="bg-primary-50 p-5">{team.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute left-0 top-0 w-full h-full z-0 overflow-hidden">
                        <Image
                            src={"/svg/about-us/team/circle.svg"}
                            alt="circle"
                            width={40}
                            height={40}
                            className="absolute top-[calc(7500%/722)] left-[calc(32800%/1240)]"
                        />
                        <Image
                            src={"/svg/about-us/team/rhombus.svg"}
                            alt="rhombus"
                            width={45}
                            height={45}
                            className="absolute top-[calc(35381%/1240)] left-[calc(4392%/1240)]"
                        />
                        <Image
                            src={"/svg/about-us/team/triangle.svg"}
                            alt="triangle"
                            width={35}
                            height={41}
                            className="absolute bottom-[54px] left-[calc(38406%/1240)]"
                        />
                        <Image src={"/svg/about-us/team/double-line.svg"} alt="double-line" width={39} height={149} className="absolute -top-6 right-[51px]" />
                        <Image
                            src={"/svg/about-us/team/double-half-circle.svg"}
                            alt="double-half-circle"
                            width={154}
                            height={100}
                            className="absolute -bottom-4 -right-6"
                        />
                    </div>
                </div>
            </div> */}

            <div className="container mx-auto space-y-[120px]">
                {/* solution */}
                <Container title="Valuable solutions that fit your need" subtitle="Our Guarantees">
                    <div className="relative flex flex-col md:flex-row gap-10 items-center justify-between w-full">
                        {guarantees.map((guarantee, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center flex-1 rounded-full bg-white border border-primary-400 aspect-square py-10 px-5 max-w-[295px]"
                            >
                                <div className="w-fit flex flex-col justify-center">
                                    <div className="text-center text-2xl font-semibold mb-6">{guarantee.title}</div>
                                    <ul>
                                        {guarantee.children.map((c, i) => (
                                            <li key={i} className="flex gap-2">
                                                <IconCircleCheck size={20} color="#F19A34" className="shrink-0" />
                                                <span>{c}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <div className="absolute w-1 h-full md:h-auto md:w-full border-l-2 flex-1 border-primary-400 border-dashed -z-10"></div>
                    </div>
                </Container>

                {/* questions */}
                {/* <div className="flex xl:flex-row flex-col justify-between items-center gap-[60px]">
                    <div className="flex justify-center  shrink-0">
                        <div className="flex justify-center gap-5">
                            <div className="relative overflow-hidden h-fit rounded-[20px]">
                                <Image
                                    src={"/images/about-us/question-1.png"}
                                    alt="question-1"
                                    width={295}
                                    height={578}
                                    className="w-full max-w-[295px] aspect-[295/578] object-cover"
                                />
                                <ShadeLayer className="bg-shade-blue-20" />
                            </div>
                            <div className="relative mt-[calc(7900%/590)] rounded-[20px] overflow-hidden">
                                <Image
                                    src={"/images/about-us/question-2.png"}
                                    alt="question-2"
                                    width={295}
                                    height={578}
                                    className="w-full max-w-[295px] aspect-[295/578] object-cover"
                                />
                                <ShadeLayer className="bg-shade-blue-20" />
                            </div>
                        </div>
                    </div>
                    <Question />
                </div> */}

                {/* get in touch */}
                <GetInTouch />
            </div>
        </main>
    );
};
export default AboutUs;
