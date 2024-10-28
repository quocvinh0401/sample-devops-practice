import ContactForm from "@/components/supports/ContactForm";
import { contactItems, getInTouchDescription } from "@/libraries/constants";
import { cn } from "@/utils/utility";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Contact",
};

const Contact = () => {
    return (
        <main className="bg-primary-150 !pb-0">
            <div className="relative w-full">
                <div className="absolute top-0 left-0 w-full h-[660px]">
                    <Image src={"/images/contact/background.png"} alt="contact" fill sizes="100%" className="object-cover brightness-[.82]" />
                    <div>
                        <div className="absolute left-0 w-full h-40 bottom-3 clip-path-wave-contact-polygon bg-primary-400"></div>
                        <div className="absolute left-0 w-full h-40 bottom-0 clip-path-wave-contact-polygon bg-primary-150"></div>
                    </div>
                </div>
                <div className="container mx-auto relative pt-[180px] pb-[60px] md:pb-[132px]">
                    <div className="text-center mb-[88px]">
                        <h1 className="text-white">Get In Touch</h1>
                        <div className="text-white">{getInTouchDescription}</div>
                    </div>
                    <div className="contact bg-white px-[24px] py-[16px] sm:px-[60px] sm:py-[40px] rounded-[40px] relative shadow-neutral-15">
                        <div className="flex justify-between relative flex-col-reverse md:flex-row gap-10">
                            <div className="md:max-w-[493px] w-full relative z-10">
                                <div className="text-[32px] font-bold capitalize mb-10 text-center md:text-start">Discuss your project with us</div>
                                <div>
                                    <ContactForm />
                                </div>
                            </div>
                            <div className="relative flex-1">
                                <div className="flex justify-center">
                                    <div className="relative z-10">
                                        <div className="relative mb-[60px] flex justify-center md:justify-start">
                                            <div className="text-[32px] font-semibold text-center">Contact information</div>
                                            <Image
                                                src={"/svg/contact/line.svg"}
                                                alt="line"
                                                width={351}
                                                height={4}
                                                className="absolute md:-left-9 -bottom-[26px]"
                                            />
                                        </div>
                                        <div className="space-y-10">
                                            {contactItems.map((item, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <div className="shrink-0">{item.icon}</div>
                                                    {/* TODO: handle long text (email) when responsive mobile */}
                                                    <span className={cn("text-lg", item.color ? "text-secondary-500" : "")}>{item.description}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    src={"/images/contact/background-form.png"}
                                    alt="background"
                                    width={644}
                                    height={390}
                                    className="md:absolute xl:-right-[60px] lg:min-w-[410px] bottom-0 xl:-bottom-10 xl:w-[644px] w-full xl:h-[390px] max-w-[644px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Contact;
