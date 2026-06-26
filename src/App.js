import { createBrowserRouter, /* createRoutesFromElements, Route, */ RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";


/* 
We can also create Routes using JSX code as in below example.
The older version actually defined all the routes with the help of Componenbts and JSX code instead of JavaScript Objects in array.
*/
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions);

// const router = createBrowserRouter([
//   {path: '/', element: <HomePage />},
//   {path: '/products', element :<Products />}
// ])


/* 
  Wrapper or parents roots are commonly used for components like Navigation that need to be inclued on all Routes.
*/
const router = createBrowserRouter([
  {
    path: '/root',
    element: <RootLayout/>,
    errorElement: <Error />,
    children: [
      /* 
        Paths starting with "/" are absoulte paths i.e., path matches from the end of domain.
        By removing the '/' the path is now relative to the parent path
      */
      {path: '', element: <HomePage />},
      {path: 'products', element :<Products />},
      {path:'products/:productId', element: <ProductDetails/>}
    ]
  }
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
