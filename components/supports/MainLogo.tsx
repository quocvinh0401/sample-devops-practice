import Image from "next/image";
import Link from "next/link";

const MainLogo = () => {
    return (
        <Link href={"/"}>
            <Image src={"/images/logo.png"} width={190} height={60} alt="logo" />
        </Link>
    );
};
export default MainLogo;
