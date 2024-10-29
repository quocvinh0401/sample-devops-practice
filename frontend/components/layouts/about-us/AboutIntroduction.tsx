import CommonButton from "@/components/supports/CommonButton";
import { introduceAboutPage } from "@/libraries/constants";
import { IconCircleArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

const AboutIntroduction = () => {
    return (
        <div className="relative lg:pb-[132px] mb-[60px]">
            {/* content */}
            <div className="flex flex-col items-center gap-10">
                <Image
                    src={"/images/about-us/introduction.png"}
                    alt="introduction"
                    width={715}
                    height={510}
                    className="rounded-br-[40px] rounded-tl-[40px] lg:ml-auto w-full max-w-[715px] aspect-[715/510] shadow-primary-60 relative z-10 object-cover"
                />
                <div className="lg:absolute bottom-0 left-0 p-6 xs:p-10 rounded-br-[40px] rounded-tl-[40px] bg-primary-50 max-w-[732px] z-10">
                    <h1>About Sample</h1>
                    <p className="mb-[40px] text-white-700">{introduceAboutPage}</p>
                    <CommonButton text="Contact us" icon={<IconCircleArrowUpRight size={24} color="white" />} path="/contact" />
                </div>
            </div>

            {/* background */}
            {/* <div>
                <Image src={"/svg/about-us/introduction/plus.svg"} alt="plus" width={31} height={31} className="absolute top-[133px] left-[82px]" />
                <Image src={"/svg/about-us/introduction/circle.svg"} alt="circle" width={34} height={34} className="absolute top-[34px] left-[505px]" />
                <Image
                    src={"/svg/about-us/introduction/triple-triangle.svg"}
                    alt="triple-triangle"
                    width={32}
                    height={116}
                    className="absolute top-[130px] left-[418px] z-20"
                />
                <Image
                    src={"/svg/about-us/introduction/triple-line.svg"}
                    alt="triple-line"
                    width={104}
                    height={179}
                    className="absolute left-[660px] -bottom-[61px] w-[104px] h-[179px] z-20"
                />
            </div> */}
        </div>
    );
};
export default AboutIntroduction;
