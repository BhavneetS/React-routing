import { Link, useParams } from "react-router-dom"

export default function ProductDetails() {
    const params =useParams()
    return (
        <>
            <h1>Product Details</h1>
            <p>Path Params: {params.productId}</p>
             <p>
                {/* 
                    By adding the relative attribute as "path" the react router will review the path definition and not the route deifinition. 
                */}
                <Link to=".." relative="path">Back</Link>
            </p>
        </>
    )
}