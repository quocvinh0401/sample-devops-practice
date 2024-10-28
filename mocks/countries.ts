import { Country } from "@/libraries/type";
import { Builder } from "builder-pattern";

export const countries = [
    Builder<Country>().name("Viet Nam").code("VN").prefixPhoneNumber("+84").build(),
    Builder<Country>().name("English").code("EN").prefixPhoneNumber("+11").build(),
];
