import { memo } from "react";

interface ModalProps {
    children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
    return <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/30 z-[9000]">{children}</div>;
};
export default memo(Modal);
