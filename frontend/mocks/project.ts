import { Project } from "@/libraries/type";
import { Builder } from "builder-pattern";

export const projectItems: Project[] = [
    Builder<Project>().backgroundImage("/images/temp/project-2.png").backgroundColor("bg-[#19447E]").title("Name of Project").type("Project Type").build(),
    Builder<Project>().backgroundImage("/images/temp/project-1.png").backgroundColor("bg-[#E7F7F6]").title("TC Ontime").type("Web Design").build(),
    Builder<Project>()
        .backgroundImage("/images/temp/project-3.png")
        .backgroundColor("bg-[#F5E4F7]")
        .title("TC Doctor Appointment")
        .type("Mobile App Design")
        .build(),
];
