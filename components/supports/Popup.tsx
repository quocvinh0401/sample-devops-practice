import Link from "next/link";
import CommonButton from "./CommonButton";
import { IconCircleCheck } from "@tabler/icons-react";

interface Props {
    title: string;
    children: React.ReactNode;
}

const Popup = ({ title, children }: Props) => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/30 z-[9000]">
            <div className="flex items-center justify-center relative pt-[100px] px-[127px] pb-[60px] bg-white rounded-[20px] shadow-neutral-10">
                <div className="space-y-[60px]">
                    <div className="space-y-5">
                        <h2 className="text-white-950 text-center">{title}</h2>
                        {children}
                    </div>
                    <div className="flex gap-5">
                        <CommonButton text="Back To Home" textColor="text-white-950" path="/" border="border border-white-950" background="bg-transparent" />
                        <CommonButton text="Continue Explore" path="/" />
                    </div>
                </div>
                <div className="p-[25px] absolute -top-[50px] bg-white rounded-full z-[9999]">
                    <IconCircleCheck size={100} color="#F19A34" />
                </div>
            </div>
        </div>
    );
};
export default Popup;
