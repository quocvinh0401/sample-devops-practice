import Image from "next/image";

interface Props {
    image: string;
    children: React.ReactNode;
    title: string;
    subtitle?: string;
}

const ImageContainer = ({ title, subtitle, image, children }: Props) => {
    return (
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-[60px]">
            <div className="w-full flex flex-col items-center lg:items-start">
                <div className="px-4 xs:px-10 xl:px-[100px]">
                    {subtitle ?? <div className="text-white-500 mb-2">{subtitle}</div>}
                    <h2 className="mb-10">{title}</h2>
                </div>
                <Image src={image} alt="" width={605} height={430} className="object-contain rounded" />
            </div>
            <div className="px-4 xs:px-10 xl:pr-[100px] lg:pl-0">{children}</div>
        </div>
    );
};
export default ImageContainer;
