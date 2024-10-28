import CommonButton from "@/components/supports/CommonButton";
import { reasonsServicePage } from "@/libraries/constants";
import { IconCircleCheck } from "@tabler/icons-react";

const Reason = () => {
    return (
        <div className="relative flex flex-col items-center lg:items-end max-w-8xl lg:mx-auto mx-4">
            <div className="relative lg:mr-[100px] bg-[url('/images/service/reason.png')] max-w-[1135px] p-[calc(10000%/1135)] h-[747px] w-full rounded-[40px] sm:rounded-tl-[120px]">
                <div className="relative sm:max-w-[345px]">
                    <div className="relative z-10 p-6 sm:p-10 rounded-[20px] border-2 border-white bg-[#52525299] backdrop-blur-[5px]">
                        <div className="text-white text-2xl font-semibold">Some Reasons Why You Should Choose Us</div>
                        <hr className="my-10" />
                        <ul className="space-y-4 mb-[60px]">
                            {reasonsServicePage.map((item, index) => (
                                <li key={index} className="flex gap-3 items-center">
                                    <IconCircleCheck size={24} color="#F19A34" />
                                    <span className="text-white">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <CommonButton text="Get in touch" path="/contact" textColor="text-white" background="bg-transparent" border="border border-white" />
                    </div>
                    <div className="absolute w-full h-full -left-[20px] top-[20px] sm:top-[33px] sm:-left-[33px] bg-primary-400 rounded-[20px]"></div>
                </div>
            </div>
        </div>
    );
};
export default Reason;
