import { /* Link, */ NavLink } from "react-router-dom"
import classes from './Navigation.module.css'

export default function Navigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    {/* 
                        The path is compared from the start to identify the active route. 
                        As "/" is a subset of "/products", both routes will be marked as active when the /products route is Selected. 
                        In order to avoid this, we can use the "end" attribute that makes sure that the route is marked as active only if the end of the current route matches the path.
                    */}
                    <li><NavLink to="" className={({isActive})=>(isActive ? classes.active : undefined)} end>Home</NavLink></li>
                    <li><NavLink to="products" className={({isActive})=>(isActive ? classes.active : undefined)}>Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}