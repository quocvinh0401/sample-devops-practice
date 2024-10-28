import { IconCircleArrowUpRight, IconCircleCheck } from "@tabler/icons-react";
import CommonButton from "./CommonButton";
import Image from "next/image";
import { getInTouchDescription } from "@/libraries/constants";

const GetInTouch = () => {
    const sentences = ["Learn more about Sample", "Find the right solution for your needs", "Schedule a demo"];

    return (
        <section className="bg-secondary-950 rounded-[40px] px-[33px] py-[44px] md:px-[60px] relative md:py-20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <Image src={"/svg/about-us/touch/touch-1.svg"} width={1308} height={205} alt="" className="absolute left-0 bottom-[10px]" />
                <Image src={"/svg/about-us/touch/touch-2.svg"} width={1308} height={205} alt="" className="absolute left-0 bottom-0" />
            </div>
            <div className="flex gap-14 relative items-center flex-col lg:flex-row">
                <div>
                    <h2 className="text-white mb-2">Get In Touch</h2>
                    <p className="text-white">{getInTouchDescription}</p>
                    <hr className="w-[166px] my-10" />
                    <ul className="space-y-5 mb-[60px]">
                        {sentences.map((sentence, index) => (
                            <li key={index} className="flex gap-3">
                                <IconCircleCheck size={20} color="white" className="shrink-0" />
                                <span className="text-white">{sentence}</span>
                            </li>
                        ))}
                    </ul>
                    <CommonButton
                        text="Contact us"
                        icon={<IconCircleArrowUpRight size={24} color="white" />}
                        path="/contact"
                        background="bg-transparent"
                        border="border border-white"
                    />
                </div>
                <Image src={"/images/about-us/contact.png"} alt="contact" width={649} height={390} className="max-w-[649px] w-full h-full" />
            </div>
        </section>
    );
};
export default GetInTouch;
