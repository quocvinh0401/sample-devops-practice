"use client";

import Image from "next/image";
import CommonButton from "./CommonButton";
import { ChangeEvent, memo, useState } from "react";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { PiUploadSimpleBold } from "react-icons/pi";
import { countries } from "@/mocks/countries";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getTypeFile } from "@/utils/utility";

interface InputFieldProps {
    title: string;
    hintText?: string;
    error?: FieldError;
    children: React.ReactNode;
}

const InputField = ({ title, children, hintText, error }: InputFieldProps) => {
    return (
        <div className="space-y-1 relative">
            <div className="font-semibold flex space-x-1 item">
                <span>{title}</span>
                <span className="text-primary-600 text-lg">*</span>
            </div>
            <div className="border border-white-300 rounded-lg overflow-hidden h-[52px] flex items-center pl-5">{children}</div>
            {hintText && <div className="pt-1 pl-5 text-white-500">{hintText}</div>}
            <p className="text-red-500 ">{error?.message}</p>
        </div>
    );
};

interface ApplyFormProps {
    position: string;
    onCancel: () => void;
}

// TODO: add more validation
const schema = z.object({
    fullName: z.string().min(1),
    email: z.string().email(),
    phone: z.string(),
    cv: z
        .any()
        .refine((files) => files?.length > 0, { message: "Your cv is required" })
        .refine((files) => files?.[0]?.size < 5242880, { message: "Max file size is 5MB." })
        .refine((files) => ["doc", "docx", "pdf"].includes(getTypeFile(files[0])), { message: ".doc, .docx and .pdf file are accepted." }),
});

type FormFields = z.infer<typeof schema>;

const ApplyForm = ({ position, onCancel }: ApplyFormProps) => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<FormFields>({
        defaultValues: {
            phone: countries[0].prefixPhoneNumber,
        },
        resolver: zodResolver(schema),
    });
    const [file, setFile] = useState("");

    const handleChangeCountry = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setValue("phone", countries.find((country) => country.code == value)?.prefixPhoneNumber!);
    };

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data);
    };

    return (
        <div className="px-10 py-[34px] rounded-2xl bg-white space-y-10 max-w-[824px] w-full max-h-full overflow-y-auto">
            <div className="font-semibold text-2xl pb-5 border-b-2">
                Apply for <span className="text-primary-400">{position}</span>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <InputField title="Full name" error={errors.fullName}>
                    <input type="text" {...register("fullName")} placeholder="Type your information..." className="w-full" />
                </InputField>
                <InputField title="Email" error={errors.email}>
                    <input type="text" {...register("email")} placeholder="Type your information..." className="w-full" />
                </InputField>
                <InputField title="Phone" error={errors.phone}>
                    <div className="flex gap-5 items-center w-full">
                        <select className="outline-none" onChange={(e) => handleChangeCountry(e)}>
                            {countries.map((country) => (
                                <option key={country.name}>{country.code}</option>
                            ))}
                        </select>
                        <input type="text" {...register("phone")} className="pl-5 border-l flex-1" />
                    </div>
                </InputField>
                <InputField title="CV" hintText="DOC, DOCX, PDF (5 MB)" error={errors.cv as FieldError}>
                    <>
                        <div className="w-full">{file}</div>
                        <label htmlFor="cv" className="shrink-0 bg-primary-50 flex items-center h-full px-[10px] cursor-pointer">
                            <div className="flex items-center gap-2">
                                <PiUploadSimpleBold size={24} className="fill-primary-400" />
                                <span className="hidden xs:block text-xl font-semibold">Upload Your CV</span>
                            </div>
                            <input
                                type="file"
                                id="cv"
                                className="w-0 h-0"
                                {...register("cv")}
                                onChange={(e) => setFile(e.target.files?.[0]?.name ?? "")}
                                accept=".doc,.docx,.pdf"
                            />
                        </label>
                    </>
                </InputField>
                <div className="flex justify-end gap-4">
                    <CommonButton onClick={onCancel} text="Cancel" textColor="black" className="bg-white-100" />
                    <CommonButton
                        disabled={isSubmitting}
                        type="submit"
                        text="Apply Now"
                        icon={<Image src={"/svg/careers/paper-plane.svg"} alt="paper-plane" width={24} height={24} />}
                        className="flex-row-reverse"
                    />
                </div>
            </form>
        </div>
    );
};
export default memo(ApplyForm);
