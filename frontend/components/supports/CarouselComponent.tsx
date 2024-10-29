import { Carousel } from "@mantine/carousel";

interface CarouselComponentProps {
    children: React.ReactNode;
}

const CarouselComponent = ({ children }: CarouselComponentProps) => {
    return (
        <Carousel slideSize={{ base: "99%", xs: "49.5%", md: "33.1%" }} withControls={false} slideGap="lg" align="start" containScroll="trimSnaps">
            {children}
        </Carousel>
    );
};
export default CarouselComponent;
