"use client";

import ReCAPTCHA from "react-google-recaptcha";
import CommonButton from "./CommonButton";
import { IconSend } from "@tabler/icons-react";
import { useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import http from "@/libraries/axios";
import { toast } from "react-toastify";

const schema = z.object({
    name: z.string().min(1),
    phone: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
});

type FormFields = z.infer<typeof schema>;

const ContactForm = () => {
    const [isVerify, setIsVerify] = useState<boolean>(false);

    const handleChange = (value: string | null) => {
        value ? setIsVerify(true) : setIsVerify(false);
    };

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            await http.post("/contact", {
                body: data,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            toast.success("Sending successfully");
            reset();
        } catch (error) {}
    };

    return (
        <form className="flex flex-col space-y-5 w-full form-contact" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name")} placeholder="Name" name="name" />
            <input type="text" {...register("phone")} placeholder="Phone" name="phone" />
            <input type="text" {...register("email")} placeholder="Email" name="email" />
            <textarea {...register("message")} name="message" placeholder="Message" rows={4} className="resize-none"></textarea>
            <div className="flex justify-center flex-col gap-x-8 items-center sm:items-start sm:flex-row">
                <div className="w-[228px] overflow-hidden">
                    <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} onChange={handleChange} className="scale-75 w-full origin-top-left" />
                </div>
                <div className="mt-[3.5px]">
                    <CommonButton
                        type="submit"
                        disabled={!isVerify || isSubmitting}
                        text={isSubmitting ? "Sending..." : "Send a message"}
                        icon={isSubmitting ? null : <IconSend color="white" size={24} />}
                        className="w-[230px] justify-center"
                    />
                </div>
            </div>
        </form>
    );
};
export default ContactForm;
