import GridContainer from "../components/default/GridContainer"
import NavBar from "../components/nav/NavBar"
import SideBar from "../components/nav/SideBar"

export default function GridLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="dark background grid min-h-screen h-full">
            <GridContainer cols={12}>
                <SideBar />
                <div className="col-span-full lg:col-span-10">
                    <div>
                        <NavBar />
                        {children}
                    </div>
                </div>
            </GridContainer>
        </main>
    )
}