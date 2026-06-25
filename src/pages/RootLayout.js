import { Outlet } from "react-router-dom"
import Navigation from "./Components/Navigation"

export default function RootLayout() {
    return (
        <>
            <Navigation/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}