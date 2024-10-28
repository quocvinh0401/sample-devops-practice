"use client";

import { questions } from "@/mocks/question";
import { cn } from "@/utils/utility";
import { Accordion } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

const Question = () => {
    const [value, setValue] = useState<string[]>([]);

    const isActive = (value: number, current: string[]) => {
        return current.includes("" + value);
    };

    return (
        <div className="w-full">
            <span className="text-neutral-500 mb-2">FAQs</span>
            <h2 className="mt-1 mb-4">Frequently Asked Questions</h2>
            <Accordion chevronPosition="left" multiple onChange={setValue} transitionDuration={800} disableChevronRotation>
                {questions.map(({ question, answer }, index) => (
                    <Accordion.Item value={`${index}`} key={index} className={cn("py-3", index == questions.length - 1 && "!border-none")}>
                        <Accordion.Control
                            chevron={isActive(index, value) ? <IconMinus className="w-6 h-6 shrink-0" /> : <IconPlus className="w-6 h-6 shrink-0" />}
                            className="hover:!bg-transparent [&>*:first-child]:ml-0 [&>*:first-child]:mr-5"
                        >
                            <div className={cn(isActive(index, value) ? "text-primary-400" : "")}>{question}</div>
                        </Accordion.Control>
                        <Accordion.Panel>{answer}</Accordion.Panel>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
};
export default Question;
