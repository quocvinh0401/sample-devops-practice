import { TimeMode } from "./type";

export const timeModeDictionary = (mode: TimeMode) => {
    switch (mode) {
        case TimeMode.FULL_TIME:
            return "Full time";
        case TimeMode.PART_TIME:
            return "Part time";
        default:
            return "";
    }
};
