import { Builder } from "builder-pattern";

interface Technology {
    image: string;
}

export const technologies = [
    Builder<Technology>().image("/svg/technologies/technology-1.svg").build(),
    Builder<Technology>().image("/svg/technologies/technology-2.svg").build(),
    Builder<Technology>().image("/svg/technologies/technology-3.svg").build(),
    Builder<Technology>().image("/svg/technologies/technology-4.svg").build(),
    Builder<Technology>().image("/svg/technologies/technology-5.svg").build(),
];
