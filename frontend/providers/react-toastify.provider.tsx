"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastifyProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <ToastContainer autoClose={3000} pauseOnFocusLoss={false} pauseOnHover={false} />
        </>
    );
};
export default ToastifyProvider;
