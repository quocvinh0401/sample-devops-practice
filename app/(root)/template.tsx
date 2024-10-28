import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { MantineProvider, createTheme } from "@mantine/core";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

const theme = createTheme({
    fontFamily: "Avenir Next, sans-serif",
});

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <MantineProvider theme={theme}>
            <div className="avenir flex min-h-dvh flex-col relative">
                <Header />
                <div className="flex-1">{children}</div>
                <Footer />
            </div>
        </MantineProvider>
    );
}
