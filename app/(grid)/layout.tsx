import GridContainer from "../components/default/GridContainer"
import SideBar from "../components/nav/SideBar"

export default function GridLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="grid h-screen">
            <GridContainer cols={12}>
                <SideBar />
                <div className="bg-amber-500 col-span-full lg:col-span-10">
                    {children}
                </div>
            </GridContainer>
        </main>
    )
}