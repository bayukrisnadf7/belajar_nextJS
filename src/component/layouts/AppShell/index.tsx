import Footer from "../Footer"
import Navbar from "../Navbar"
type AppShellProps = {
    children: React.ReactNode
}

const AppShell = (props: AppShellProps) => {
    const { children } = props
    return (
        <div>
            <main>
            <Navbar />
            {children}
            <Footer />
            </main>
        </div>
    )
}
export default AppShell