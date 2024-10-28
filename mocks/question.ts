import { QuestionItem } from "@/libraries/type";
import { Builder } from "builder-pattern";

export const questions: QuestionItem[] = [
    Builder<QuestionItem>()
        .question("Question 1")
        .answer(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
        )
        .build(),
    Builder<QuestionItem>()
        .question("Question 1")
        .answer(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
        )
        .build(),
    Builder<QuestionItem>()
        .question("Question 1")
        .answer(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
        )
        .build(),
    Builder<QuestionItem>()
        .question("Question 1")
        .answer(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
        )
        .build(),
];
