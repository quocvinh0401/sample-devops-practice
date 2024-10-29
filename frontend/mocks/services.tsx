import { Comment } from "@/libraries/type";
import { Builder } from "builder-pattern";

export const comments: Comment[] = [
    Builder<Comment>()
        .author("Thomas Mickeleit")
        .text(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
        )
        .rate(4)
        .job("Job Name")
        .build(),
    Builder<Comment>()
        .author("Name of client")
        .text(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
        )
        .rate(5)
        .job("Job Name")
        .build(),
    Builder<Comment>()
        .author("Name of client")
        .text(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
        )
        .rate(5)
        .job("Job Name")
        .build(),
];
