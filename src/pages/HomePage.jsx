import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <>
            <h1 style={{ paddingLeft: '2em' }}>My Home page</h1>
            <p>
                Go to <Link to="/products">Products page.</Link>
            </p>
        </>
    )
}