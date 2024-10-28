import { projectItems } from "@/mocks/project";
import Container from "./Container";
import Image from "next/image";
import { cn } from "@/utils/utility";
import { Carousel } from "@mantine/carousel";
import CarouselComponent from "./CarouselComponent";

interface Props {
    title: string;
    subtitle: string;
    more: string;
}

const ProjectContainer = ({ title, subtitle, more }: Props) => {
    return (
        <Container title={title} subtitle={subtitle} position="left" more={more}>
            <CarouselComponent>
                {projectItems.map((project, index) => (
                    <Carousel.Slide key={index}>
                        <div className="pb-1 h-full">
                            <div className="flex flex-col rounded-lg border border-transparent h-full group overflow-hidden transition-colors duration-300 hover:border-primary-400 shadow-neutral-20 hover:shadow-primary-30">
                                <div className={cn("px-10 pt-10", project.backgroundColor ? project.backgroundColor : "")}>
                                    <div className="relative w-full">
                                        <Image src={project.backgroundImage} width={320} height={246} alt={project.title} className="w-full" />
                                    </div>
                                </div>
                                <div className="flex-1 text-center p-5 space-y-2 group-hover:bg-primary-50 ">
                                    <div className="text-lg font-semibold">{project.title}</div>
                                    <div>{project.type}</div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Slide>
                ))}
            </CarouselComponent>
        </Container>
    );
};
export default ProjectContainer;
