import { Outlet } from "react-router-dom"
import Navigation from "./Components/Navigation"
import classes from './Root.module.css'

export default function RootLayout() {
    return (
        <>
            <Navigation/>
            <main className={classes.content}>
                <Outlet/>
            </main>
        </>
    )
}