import {
    IconAward,
    IconBrush,
    IconChartLine,
    IconClipboardText,
    IconCode,
    IconDevices,
    IconDiamond,
    IconEye,
    IconMail,
    IconMapPin,
    IconPigMoney,
    IconTargetArrow,
} from "@tabler/icons-react";
import { Builder } from "builder-pattern";
import { CommonItem, ContactItem, NavItem } from "./type";

import aiService from "@/public/images/temp/icon/ai.svg";
import cloudService from "@/public/images/temp/icon/cloud.svg";
import devsecopsService from "@/public/images/temp/icon/shield_1241572.svg";

// variable
export const FILTER_ALL = "All";

//Home Page

export const reasonItems: CommonItem[] = [
    Builder<CommonItem>()
        .icon(<IconDiamond size={36} color="#EA7516" />)
        .title("Strategic Insights")
        .description(
            "We go beyond just delivering solutions; we provide strategic insights and guidance to help our clients navigate the complexities of the digital landscape and make informed decisions that drive success."
        )
        .build(),
    Builder<CommonItem>()
        .icon(<IconChartLine size={36} color="#EA7516" />)
        .title("Collaborative Approach")
        .description(
            " We believe in the power of collaboration and work closely with our clients as trusted partners, ensuring transparency, communication, and alignment every step of the way."
        )
        .build(),
    Builder<CommonItem>()
        .icon(<IconPigMoney size={36} color="#EA7516" />)
        .title("Technical Excellence")
        .description(
            "Our team comprises top talent with expertise in a wide range of technologies, enabling us to tackle even the most challenging projects with confidence and precision."
        )
        .build(),
    Builder<CommonItem>()
        .icon(<IconAward size={36} color="#EA7516" />)
        .title("Customer-Centric Focus")
        .description(
            " Customer satisfaction is at the heart of everything we do. We're dedicated to delivering exceptional service and support to our clients, building long-lasting relationships based on trust, integrity, and mutual success."
        )
        .build(),
];

export const mechanisms: CommonItem[] = [
    Builder<CommonItem>()
        .icon(<IconClipboardText size={40} className="group-hover:stroke-primary-400" />)
        .title("Discovery and Analysis")
        .description(
            "We immerse ourselves in understanding your goals, audience, and market. Through explore and active discussions, we gain insights that shape a tailored strategy to meet your needs effectively."
        )
        .build(),
    Builder<CommonItem>()
        .icon(<IconBrush size={40} className="group-hover:stroke-primary-400" />)
        .title("Planning and Proposal")
        .description(
            "Crafting a roadmap involves translating insights into actionable plans. We set clear goals, timelines, milestones and costs, ensuring alignment with your vision and objectives for a successful project."
        )
        .build(),
    Builder<CommonItem>()
        .icon(<IconCode size={40} className="group-hover:stroke-primary-400" />)
        .title("Architecture and Implementation")
        .description(
            "Our team creates user-centric designs and implement robust solutions. Leveraging cutting-edge technologies, we ensure every aspect aligns with your objectives, delivering impactful digital experiences."
        )
        .build(),
    Builder<CommonItem>()
        .icon(<IconDevices size={40} className="group-hover:stroke-primary-400" />)
        .title("Testing, Delivery and Training")
        .description(
            "We conduct rigorous testing to ensure reliability. Seamless delivery is followed by ongoing support and training sessions, ensuring our solutions remain effective long-term. Your success is our priority."
        )
        .build(),
];

export const introduceHomePage =
    "At Sample, we accelerate businesses growth through our comprehensive technology services. We offer expert DevSecOps consulting, efficient Cloud Management solutions, and AI Model Operation - AIOps to meet your business needs. Trust Sample to transform your technological capabilities and drive your business success.";
// Our DevSecOps Consulting integrates security seamlessly into your development lifecycle, while our Cloud Management solutions optimize your infrastructure for maximum efficiency, scalability and cost. Additionally, our AIOps service will help your AI Model Deployment hassle-free, ensuring reliability and enhanced performance.
export const joinHomePage =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.";

// about-us page
export const introduceAboutPage =
    "We are a technology solutions provider dedicated to innovation and excellence. Since our inception, we've been at the forefront of technological advancements, delivering cutting-edge solutions tailored to our clients' needs. With a focus on integrity, excellence, collaboration, and innovation, we're committed to driving positive change and exceeding expectations.";

export const missions = [
    {
        icon: <IconTargetArrow color="#F4B255" size={40} />,
        title: "Mission",
        description:
            "Our mission is to empower businesses to achieve their full potential by integrating security seamlessly into their development and operational processes. We are dedicated to providing top-notch DevSecOps consulting services that foster innovation, enhance security, and ensure compliance. By leveraging our expertise and cutting-edge solutions, we help organizations build robust, secure, and scalable systems that drive growth and resilience in an ever-evolving digital landscape.",
    },
    {
        icon: <IconEye color="#F4B255" size={40} />,
        title: "Vision",
        description:
            "Our vision is to be the premier DevSecOps consulting firm that transforms how businesses approach security in their development and operations. We aspire to create a world where security is an integral part of the software development lifecycle, enabling organizations to innovate with confidence. Through our commitment to excellence, continuous improvement, and client success, we aim to set the standard for secure, efficient, and sustainable digital solutions globally.",
    },
    {
        icon: <IconDiamond color="#F4B255" size={40} />,
        title: "Value",
        children: ["Integrity and Trust", "Innovation and Excellence", "Client-Centric Approach"],
    },
];

export const serviceIcons = [devsecopsService, cloudService, aiService];

export const teams = [
    {
        name: "Name 1",
        background: "/images/about-us/team-1.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipielit. Ut et massa mi. Aliquam in hendrerit urna. Pellesit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis",
    },
    {
        name: "Name 2",
        background: "/images/about-us/team-2.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipielit. Ut et massa mi. Aliquam in hendrerit urna. Pellesit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis",
    },
    {
        name: "Name 3",
        background: "/images/about-us/team-3.png",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipielit. Ut et massa mi. Aliquam in hendrerit urna. Pellesit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis",
    },
];

export const guarantees = [
    {
        title: "Quality",
        children: ["Uncompromising quality in every deliverable.", "Your satisfaction, our priority.", "Excellence at every step, assured."],
    },
    {
        title: "Timeliness",
        children: ["On-time delivery, always.", "Deadlines met, without fail.", "Your time respected, every project."],
    },
    {
        title: "Support",
        children: ["Support beyond project completion.", "Reliable assistance, whenever you need.", "Your success, our ongoing commitment."],
    },
];

// service page
export const introduceServicePage = "Explore a range of technology services, all designed to empower your business in the digital landscape.";

export const ourServiceDescription = "";

export const ourServices = [
    {
        id: 1,
        title: "DevSecOps Consulting",
        slug: "devsecops",
        bg: "/images/service-detail/devsecops-intro.svg",
        description:
            "Our DevSecOps Consulting service integrates security throughout your development lifecycle. We ensure fast, secure software delivery and mitigate risks effectively. Learn more to see how we can help you.",
        children: [
            "Integrating security into every development phase.",
            "Customized strategies for efficient, compliant operations.",
            "Continuous monitoring against evolving threats.",
        ],
        definition:
            "DevSecOps consulting services integrate security into DevOps processes by assessing current practices, implementing automated security checks, and ensuring compliance. They provide ongoing support and training to continuously refine security measures and address emerging threats.",
        steps: [
            {
                title: "Assessment and Analysis",
                description:
                    "Conduct an in-depth evaluation of existing DevOps and security practices to identify strengths, weaknesses, and areas for improvement.",
            },
            {
                title: "Integration and Automation",
                description:
                    "Implement security measures into the DevOps pipeline, automating security checks and incorporating security tools to ensure continuous monitoring and compliance.",
            },
            {
                title: "Training and Support",
                description:
                    "Provide comprehensive training and ongoing support to development teams, empowering them to adopt and maintain secure coding practices and respond effectively to security incidents.",
            },
        ],
    },
    {
        id: 2,
        title: "Cloud Management",
        slug: "cloud-management",
        bg: "/images/service-detail/cloud-intro.svg",
        description:
            "Our Cloud Management service optimizes your cloud infrastructure for peak performance and cost efficiency. We ensure your resources are scalable, secure, and well-managed. Let us help you maximize your cloud investment and achieve your business goals.",
        children: [
            "Optimizing your cloud infrastructure for peak performance.",
            "Ensuring seamless and secure cloud operations.",
            "Providing scalable solutions for your business needs.",
        ],
        definition:
            "Cloud Management services operate by continuously monitoring cloud infrastructure to optimize resource usage, performance, and cost. They also implement security measures and compliance checks, providing real-time analytics and automated alerts to maintain the health and security of the cloud environment.",
        steps: [
            {
                title: "Monitoring",
                description: "Continuously track cloud resource usage, performance metrics, and cost, providing real-time analytics and insights.",
            },
            {
                title: "Optimization",
                description:
                    "Automatically adjust resource allocation and configurations to enhance efficiency, reduce costs, and maintain optimal performance.",
            },
            {
                title: "Security and Compliance",
                description:
                    "Implement security protocols and compliance checks, ensuring data protection and adherence to regulatory standards through automated alerts and regular audits.",
            },
        ],
    },
    {
        id: 3,
        title: "AI Model Operation",
        slug: "aiops",
        bg: "/images/service-detail/ai-intro.svg",
        description:
            "Our AI Model Operation services simplify the integration of machine learning models into production environments. We ensure seamless scalability, reliability, and optimizing your infrastructure to perfect-fit with AI Model in your production. Leverage our expertise to harness the full potential of AI for your business growth.",

        children: [
            "Streamlining deployment of AI models.",
            "Ensuring secure and efficient AI operations.",
            "Providing continuous monitoring and optimization.",
        ],
        definition:
            "AI Model Operation services manage the deployment, monitoring, and maintenance of AI models in production environments. They ensure models perform optimally by automating updates, scaling resources, and providing real-time analytics for continuous improvement.",
        steps: [
            {
                title: "Deployment",
                description: "Implement AI models into production environments, ensuring seamless integration with existing systems and workflows.",
            },
            {
                title: "Monitoring",
                description:
                    "Continuously track model performance, accuracy, and resource usage, using real-time analytics to identify and address issues promptly.",
            },
            {
                title: "Maintenance",
                description:
                    "Automate updates and scaling, applying necessary changes to models and infrastructure to maintain optimal performance and adapt to new data and requirements.",
            },
        ],
    },
];

export const technologies = [
    {
        serviceId: 3,
        isShowed: true,
        image: "/images/temp/technologies-updated/devsecops/keras.webp",
    },
    {
        serviceId: 3,
        isShowed: true,
        image: "/images/temp/technologies-updated/devsecops/llms.png",
    },
    {
        serviceId: 3,
        isShowed: true,
        image: "/images/temp/technologies-updated/devsecops/pytorch.png",
    },
    {
        serviceId: 3,
        isShowed: true,
        image: "/images/temp/technologies-updated/devsecops/rasa.png",
    },
    {
        serviceId: 3,
        isShowed: true,
        image: "/images/temp/technologies-updated/devsecops/stable-diffusion.png",
    },
    {
        serviceId: 3,
        isShowed: true,
        image: "/images/temp/technologies-updated/devsecops/tensor-flow.jpg",
    },
    {
        serviceId: 2,
        isShowed: false,
        image: "/images/temp/technologies-updated/cloud/alibaba-cloud.jpg",
    },
    {
        serviceId: 2,
        isShowed: false,
        image: "/images/temp/technologies-updated/cloud/aws.png",
    },
    {
        serviceId: 2,
        isShowed: false,
        image: "/images/temp/technologies-updated/cloud/azure.png",
    },
    {
        serviceId: 2,
        isShowed: false,
        image: "/images/temp/technologies-updated/cloud/google-cloud.png",
    },
    {
        serviceId: 2,
        isShowed: false,
        image: "/images/temp/technologies-updated/cloud/huawei-cloud.png",
    },
    {
        serviceId: 2,
        isShowed: false,
        image: "/images/temp/technologies-updated/cloud/openstack.png",
    },
    {
        serviceId: 1,
        isShowed: false,
        image: "/images/temp/technologies-updated/aiops/inspec.png",
    },
    {
        serviceId: 1,
        isShowed: false,
        image: "/images/temp/technologies-updated/aiops/jenkins.png",
    },
    {
        serviceId: 1,
        isShowed: false,
        image: "/images/temp/technologies-updated/aiops/jojo.jpeg",
    },
    {
        serviceId: 1,
        isShowed: false,
        image: "/images/temp/technologies-updated/aiops/kubernetes.webp",
    },
    {
        serviceId: 1,
        isShowed: false,
        image: "/images/temp/technologies-updated/aiops/snyk.png",
    },
    {
        serviceId: 1,
        isShowed: false,
        image: "/images/temp/technologies-updated/aiops/sonarqube.svg",
    },
    {
        serviceId: 1,
        isShowed: false,
        image: "/images/temp/technologies-updated/aiops/terraform.png",
    },
];

export const reasonsServicePage = ["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet."];

//Service Detail Page
export const whoWeAreDescription =
    "We are a dynamic technology company dedicated to delivering innovative solutions tailored to your business needs. With a focus on expertise, innovation, and client satisfaction, we strive to empower businesses to thrive in the digital age.";

export const introduceMechanismServiceDetail =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.";

//Contact Page

export const contactIntroduce = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

//Support Component
export const getInTouchDescription =
    "Ready to take the next step in your digital journey? We're here to help. Whether you have questions about our services, want to discuss a potential project, or simply want to learn more about what we do, we're just a message away.";

//Header

export const navItems: NavItem[] = [
    Builder<NavItem>().title("About us").path("/about-us").build(),
    Builder<NavItem>()
        .title("Services")
        .path("/services")
        .children(ourServices.map((service) => Builder<NavItem>().path(`/services/${service.slug}`).title(service.title).build()))
        .build(),
    // Builder<NavItem>().title("Career").path("/careers").build(),
    // Builder<NavItem>().title("Portfolio").path("/portfolio").build(),
    // Builder<NavItem>().title("News").path("/news").build(),
];

export const contactItems: ContactItem[] = [
    Builder<ContactItem>()
        .icon(<IconMapPin size={24} />)
        .description("Singapore")
        .build(),
    // Builder<ContactItem>()
    //     .icon(<IconPhone color="#437DEE" size={24} />)
    //     .description("0919 560 616  -  0919 997 734")
    //     .color(true)
    //     .build(),
    Builder<ContactItem>()
        .icon(<IconMail size={24} />)
        .description("info@sample.tech")
        .build(),
];

// Careers Page
export const careersIntroduction =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.";

export const benefits = [
    {
        icon: "/svg/careers/rocket.svg",
        title: "Key Benefit 1",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
    },
    {
        icon: "/svg/careers/medal.svg",
        title: "Key Benefit 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
    },
    {
        icon: "/svg/careers/send.svg",
        title: "Key Benefit 3",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
    },
];

export const ourValuesDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export const ourValues = [
    {
        icon: "/svg/vip.svg",
        title: "Value 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    },
    {
        icon: "/svg/microscope.svg",
        title: "Value 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    },
    {
        icon: "/svg/paint-brush.svg",
        title: "Value 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    },
    {
        icon: "/svg/speaker.svg",
        title: "Value 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    },
    {
        icon: "/svg/celebrate.svg",
        title: "Value 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    },
];

export const exploreDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

// location
export const locations = [
    "An Giang",
    "Bà Rịa – Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cần Thơ",
    "Cao Bằng",
    "Đà Nẵng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Nội",
    "Hà Tĩnh",
    "Hải Dương",
    "Hải Phòng",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "Thành phố Hồ Chí Minh",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
];

// export const locations =[
//     {
//         "key": "an_giang",
//         "value": "An Giang"
//     },
//     {
//         "key": "ba_ria_–_vung_tau",
//         "value": "Bà Rịa – Vũng Tàu"
//     },
//     {
//         "key": "bac_giang",
//         "value": "Bắc Giang"
//     },
//     {
//         "key": "bac_kan",
//         "value": "Bắc Kạn"
//     },
//     {
//         "key": "bac_lieu",
//         "value": "Bạc Liêu"
//     },
//     {
//         "key": "bac_ninh",
//         "value": "Bắc Ninh"
//     },
//     {
//         "key": "ben_tre",
//         "value": "Bến Tre"
//     },
//     {
//         "key": "binh_dinh",
//         "value": "Bình Định"
//     },
//     {
//         "key": "binh_duong",
//         "value": "Bình Dương"
//     },
//     {
//         "key": "binh_phuoc",
//         "value": "Bình Phước"
//     },
//     {
//         "key": "binh_thuan",
//         "value": "Bình Thuận"
//     },
//     {
//         "key": "ca_mau",
//         "value": "Cà Mau"
//     },
//     {
//         "key": "can_tho",
//         "value": "Cần Thơ"
//     },
//     {
//         "key": "cao_bang",
//         "value": "Cao Bằng"
//     },
//     {
//         "key": "da_nang",
//         "value": "Đà Nẵng"
//     },
//     {
//         "key": "dak_lak",
//         "value": "Đắk Lắk"
//     },
//     {
//         "key": "dak_nong",
//         "value": "Đắk Nông"
//     },
//     {
//         "key": "dien_bien",
//         "value": "Điện Biên"
//     },
//     {
//         "key": "dong_nai",
//         "value": "Đồng Nai"
//     },
//     {
//         "key": "dong_thap",
//         "value": "Đồng Tháp"
//     },
//     {
//         "key": "gia_lai",
//         "value": "Gia Lai"
//     },
//     {
//         "key": "ha_giang",
//         "value": "Hà Giang"
//     },
//     {
//         "key": "ha_nam",
//         "value": "Hà Nam"
//     },
//     {
//         "key": "ha_noi",
//         "value": "Hà Nội"
//     },
//     {
//         "key": "ha_tinh",
//         "value": "Hà Tĩnh"
//     },
//     {
//         "key": "hai_duong",
//         "value": "Hải Dương"
//     },
//     {
//         "key": "hai_phong",
//         "value": "Hải Phòng"
//     },
//     {
//         "key": "hau_giang",
//         "value": "Hậu Giang"
//     },
//     {
//         "key": "hoa_binh",
//         "value": "Hòa Bình"
//     },
//     {
//         "key": "hung_yen",
//         "value": "Hưng Yên"
//     },
//     {
//         "key": "khanh_hoa",
//         "value": "Khánh Hòa"
//     },
//     {
//         "key": "kien_giang",
//         "value": "Kiên Giang"
//     },
//     {
//         "key": "kon_tum",
//         "value": "Kon Tum"
//     },
//     {
//         "key": "lai_chau",
//         "value": "Lai Châu"
//     },
//     {
//         "key": "lam_dong",
//         "value": "Lâm Đồng"
//     },
//     {
//         "key": "lang_son",
//         "value": "Lạng Sơn"
//     },
//     {
//         "key": "lao_cai",
//         "value": "Lào Cai"
//     },
//     {
//         "key": "long_an",
//         "value": "Long An"
//     },
//     {
//         "key": "nam_dinh",
//         "value": "Nam Định"
//     },
//     {
//         "key": "nghe_an",
//         "value": "Nghệ An"
//     },
//     {
//         "key": "ninh_binh",
//         "value": "Ninh Bình"
//     },
//     {
//         "key": "ninh_thuan",
//         "value": "Ninh Thuận"
//     },
//     {
//         "key": "phu_tho",
//         "value": "Phú Thọ"
//     },
//     {
//         "key": "phu_yen",
//         "value": "Phú Yên"
//     },
//     {
//         "key": "quang_binh",
//         "value": "Quảng Bình"
//     },
//     {
//         "key": "quang_nam",
//         "value": "Quảng Nam"
//     },
//     {
//         "key": "quang_ngai",
//         "value": "Quảng Ngãi"
//     },
//     {
//         "key": "quang_ninh",
//         "value": "Quảng Ninh"
//     },
//     {
//         "key": "quang_tri",
//         "value": "Quảng Trị"
//     },
//     {
//         "key": "soc_trang",
//         "value": "Sóc Trăng"
//     },
//     {
//         "key": "son_la",
//         "value": "Sơn La"
//     },
//     {
//         "key": "tay_ninh",
//         "value": "Tây Ninh"
//     },
//     {
//         "key": "thai_binh",
//         "value": "Thái Bình"
//     },
//     {
//         "key": "thai_nguyen",
//         "value": "Thái Nguyên"
//     },
//     {
//         "key": "thanh_hoa",
//         "value": "Thanh Hóa"
//     },
//     {
//         "key": "thua_thien_hue",
//         "value": "Thừa Thiên Huế"
//     },
//     {
//         "key": "tien_giang",
//         "value": "Tiền Giang"
//     },
//     {
//         "key": "thanh_pho_ho_chi_minh",
//         "value": "Thành phố Hồ Chí Minh"
//     },
//     {
//         "key": "tra_vinh",
//         "value": "Trà Vinh"
//     },
//     {
//         "key": "tuyen_quang",
//         "value": "Tuyên Quang"
//     },
//     {
//         "key": "vinh_long",
//         "value": "Vĩnh Long"
//     },
//     {
//         "key": "vinh_phuc",
//         "value": "Vĩnh Phúc"
//     },
//     {
//         "key": "yen_bai",
//         "value": "Yên Bái"
//     }
// ]

//Portfolio
export const introductionPortfolio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut et massa mi. Aliquam in hendrerit urna.";
