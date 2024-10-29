import { FILTER_ALL } from "@/libraries/constants";
import { FaRegStar } from "react-icons/fa";
import { PiStorefrontBold, PiSuitcaseSimpleBold } from "react-icons/pi";
import { GrCart } from "react-icons/gr";
import { MdWebAsset } from "react-icons/md";

export const categories = [
    { icon: FaRegStar, title: FILTER_ALL },
    { icon: MdWebAsset, title: "Technology" },
    { icon: PiStorefrontBold, title: "Marketing" },
    { icon: GrCart, title: "E-commerce" },
    { icon: PiSuitcaseSimpleBold, title: "Business" },
];

export const project = {
    thumbnail:
        "https://s3-alpha-sig.figma.com/img/57f3/9e1f/0636da38661723f5a69f59ead25bf825?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KYZgXFnLZWS5Lnvnb4VReiX-aEOQtiP-IDqiLfC2v-udWSXQCJZyFKXoC7CRCpsTz9AqSoUBeQvyP03zVUxNbSieG5Nsd-rk4EnGg0EQeiVjsBPp2D5p9esVhlJM9kaSa~HXrPSAFL7gHRRm8GtQv2TlhTaHjBDdDbINlol0d6rjgdT~565plSExbswcOxKHg4CG50XMZ9-aGVurAzaq5AhpzYnRCGOkAtD3HaKqe0CXfJtvlhfjb7f8uz0nzjig4qmqfgy1UaTkAqX8Gvi5XNBSXSizPegG710g4kicysobLa4~kgCjF~4-IBfSE2bbjbvWASunRPqBqky59XAy9w__",
    title: "The Variable — interactive design for those who fight indifference",
    date: new Date(),
    category: "Technology",
    timeFrame: "6 months",
    exercise: "30,000+",
    trafficIncrease: "16%",
    clinic: "45",
    problemText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
    solutionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
    aboutText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
    aboutImage:
        "https://s3-alpha-sig.figma.com/img/8503/1488/d1cbcb5d67518429dfd24646b4e7b238?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UPeGeS-mSM0-n2THuXjCqDdWogaGzK7GrAd1lmvqDL3hPkr7p9VGMwHAcsMZkl1Orq-7c5BMzYl8Jwo9E2U9Hxyhu-gXNp2J~vo5zTJKX3E5jLY5I~YBKJWdujLBscQs1Pck4PRWPXuxOIUdkFgW-QmNoO5xuVhkmC3kqe~4I6UMjQ8ZiQxCarIl4BVYJ88dqTj12qywl6BLZ4f673~N4rfJJM8q8CQ~GBm16wrtI-qVwmirIKE3BZwJx5kkgGnkmSG64VLBq2JFYqWSnbsCYZliejE4pYk0QrLqkOxPPF654OFlWDQy3UzRtJid3kMIwRceRP7KgSyCa9~KqheqJA__",
    website: "/",
    features: {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
        children: [
            {
                title: "Key feature 1",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
                image: "https://s3-alpha-sig.figma.com/img/7efe/da00/fb60d272f3e94c57bdc82f63838c8908?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SsZ4euWSppzMqJani32-9ocC7qSLogX9tbOGbYISzdprNwV3zRjlTfisSV3Dh7ReG5aldLyiGZV9NeodjVXLw6I9vK7jYWmv4TfDEd~YWgaNvAtWbL50Y1iB6KekIdaDAAngNEBfDQqalPgSpfzDTiJSujDZXIr28Ttx8nnSIseNDTNsX3eBxmH~3QeY86ro80SLY0HiP0zyt3WwN3H2POcqKpBl6VvCBP9sCQ~mPgRDpBWUtFobVuWXG5Q5L1t5KlfCz9LZbGcU98d63jCI2isW~9XHYQxTOOyyMOooaQeghIkc2TeHMZOEtrvrLDS-bXz1JOvBjrVAIQaSDrVtgQ__",
            },
            {
                title: "Key feature 2",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
                image: "https://s3-alpha-sig.figma.com/img/e0b0/e82e/d752ed9e657ed10785dbfe16a514824e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kcJ5d0M0pfSsCoxw4N8G~h3-vlEQV3lYHXXPHG6CVhzT4K6zjNvRw0htjqcPYf3xfGcMs5vtFT7S-LkxUACVFc1V9M89twg1OumkgXOP45~5L9cT6g1YEQY1YoecRoqFMYb8sA~PLI1tll3RrYqdaNBB5bmz~QJ7U9y3pABbwyGN0-FJK9~z3AL-bR2Pm5KQD~1jJEv~VmXNBNjZavGMz9593apANmEuY7-ytRZRmWpIOvkc8KJHt17vKIjlmlPEVlSHcjf-6iORRldIrq293NTFy8mhDjfETkkQwJ72aNEfp-nxU1s3aik3wFPPIImBX2u5dETSKkkha2KLh~fegw__",
            },
            {
                title: "Key feature 3",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
                image: "https://s3-alpha-sig.figma.com/img/dc8b/3970/a9b6fd5908bc5d72fd5ffa17f4279823?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iMPFv5g0FWGX8zz6vGfhtuHNoCCnQu72VzCyTVPXF2g-BAUzBgQ-5Av-QstnXx6CpBzOhqPiH-sqflTLHYKu8Kzf5X9Hq96RY8zKP5RKYg2wrjEX1CINneJkWOUInQY~-Uid2JVhTkEW8iOz332ZE~64oD1KRcTqdUs16zCxYbV3fhmXYAxonnxvYRLR95fydZUSvxXolL4fG0OljOFEuEb2ODX9kxTFSdp7NYoZ7A-pWBk8UxyF25fSzY4Qhbh8jr6aHzHCmdPyc8GB5zUAuShzjiraW0GBvhQgNzz-7ZobnDBzREBp7N2mIStMjSGp1MvumF21vSoQy2YSmtIpZg__",
            },
        ],
    },
};
