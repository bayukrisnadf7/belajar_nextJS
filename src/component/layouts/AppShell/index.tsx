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
            <div>Footer</div>
            </main>
        </div>
    )
}
export default AppShell