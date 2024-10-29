import Image from "next/image";
import ContactForm from "./ContactForm";
import ShadeLayer from "./ShadeLayer";

const DiscussForm = () => {
    return (
        <div className="md:pt-20 md:pr-20 p-10 bg-secondary-950 relative overflow-hidden clip-path-cut-corner rounded-lg">
            <div className="flex flex-col-reverse md:flex-row justify-between relative z-10 gap-20">
                <div className="space-y-10">
                    <div className="relative">
                        <div className="text-[32px] font-bold capitalize text-white">
                            Discuss your project <br /> with us
                        </div>
                        <Image src={"/svg/long-line.svg"} alt="line" width={351} height={4} className="absolute bottom-[1.6px] right-0 fill-line" />
                    </div>
                    <ContactForm />
                </div>
                {/* TODO: how to round cut corner */}
                <div className="relative bg-white p-3 clip-path-cut-corner rounded-lg aspect-[527/566] md:max-w-[527px] shrink-[2] overflow-hidden">
                    <Image
                        src={"/images/temp/discuss.png"}
                        alt="discuss"
                        width={527}
                        height={546}
                        className="object-cover w-full h-full clip-path-cut-corner rounded-lg aspect-[527/566]"
                    />
                    <ShadeLayer className="bg-shade-blue-10" />
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <Image src={"/svg/discuss-up.svg"} width={1055} height={277} alt="" className="-top-4 left-[calc(44700%/1240)] absolute" />
                <Image src={"/svg/discuss-down.svg"} width={1055} height={277} alt="" className="absolute -left-[59px] -bottom-[22px]" />
            </div>
        </div>
    );
};
export default DiscussForm;
