import { Link, useNavigate } from "react-router-dom"

export default function HomePage() {
    const navigate = useNavigate()
    function handleNavigation() {
        navigate('products');
    }
    return (
        <>
            <h1 style={{ paddingLeft: '2em' }}>My Home page</h1>
            <p>
                Go to <Link to="products">Products page.</Link>
            </p>
            <button onClick={handleNavigation}>Navigate Programatically</button>
        </>
    )
}