import ShadeLayer from "@/components/supports/ShadeLayer";
import { NewsItem } from "@/libraries/type";
import { formatTime } from "@/utils/utility";
import { IconAlarm, IconChevronRight } from "@tabler/icons-react";
import { MdAlarm } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
    news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
    return (
        <Link href={`/news/${news.id}`}>
            <div className="border rounded-lg overflow-hidden group hover:border-primary-400 hover:shadow-primary-30">
                <div className="relative">
                    <Image src={news.background} height={200} width={400} alt={news.title} className="object-cover max-h-[200px] aspect-[398/200] w-full" />
                    <ShadeLayer className="bg-shade-blue-20" />
                </div>
                <div className="p-5 group-hover:bg-primary-50 bg-white">
                    <div className="space-y-2">
                        <div className="font-medium text-white-700 uppercase">{news.category}</div>
                        <div className="flex items-center gap-2">
                            <MdAlarm size={20} color="#525252" />
                            <span className="text-neutral-700 font-medium">{formatTime(news.createdAt)}</span>
                        </div>
                        <div className="font-semibold mt-2 text-xl">{news.title}</div>
                    </div>
                    <div className="flex items-center gap-1 mt-5 justify-end">
                        <span className="text-xl font-semibold text-primary-400">See more</span>
                        <IconChevronRight size={24} color="#EA7516" />
                    </div>
                </div>
            </div>
        </Link>
    );
};
export default NewsCard;
