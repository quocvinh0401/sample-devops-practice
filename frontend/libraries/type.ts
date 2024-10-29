export interface NavItem {
    title: string;
    path: string;
    children?: NavItem[];
}

export interface ContactItem {
    icon: React.ReactNode;
    description: string;
    color: boolean;
}

export interface CommonItem {
    id?: number;
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface Project {
    backgroundImage: string;
    backgroundColor: string;
    title: string;
    type: string;
}

export interface NewsItem {
    id: number;
    background: string;
    createdAt: Date;
    title: string;
    content: string;
    category: string;
}

export interface QuestionItem {
    question: string;
    answer: string;
}

export interface Comment {
    author: string;
    text: string;
    rate: number;
    job: string;
}

export interface Job {
    id: number;
    title: string;
    isRemote: boolean;
    timeMode: TimeMode;
    location: string;
    salaryRange: number[];
    department: string;
    createdAt: Date;
    endedDate: Date;
    content: string;
}

export enum TimeMode {
    FULL_TIME = "FULL_TIME",
    PART_TIME = "PART_TIME",
}

export interface Country {
    name: string;
    code: string;
    prefixPhoneNumber: string;
}

export interface ServerProps {
    searchParams: {
        [key: string]: string;
    };
    params: {
        [key: string]: string;
    };
}
