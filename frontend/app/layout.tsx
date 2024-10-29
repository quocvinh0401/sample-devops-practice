import { ColorSchemeScript } from "@mantine/core";
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import ToastifyProvider from "@/providers/react-toastify.provider";

export const metadata: Metadata = {
    title: {
        default: "Sample",
        template: "%s | Sample",
    },
    description: "Your trusted partner in secure digital journey",
};

//TODO: currently local font isn't effective
const avenirFont = localFont({
    src: [
        {
            path: "../public/fonts/AvenirNextLTPro-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/AvenirNextLTPro-Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body className={avenirFont.className}>
                <ToastifyProvider>{children}</ToastifyProvider>
            </body>
        </html>
    );
}
