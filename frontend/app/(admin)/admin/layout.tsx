import SideBar from "@/components/admin/SideBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="flex min-h-dvh">
                <div>
                    <SideBar />
                </div>
                <div className="p-4 flex-1">{children}</div>
            </div>
        </div>
    );
}
