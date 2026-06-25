import { createBrowserRouter, /* createRoutesFromElements, Route, */ RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";


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
    path: '/',
    element: <RootLayout/>,
    errorElement: <Error />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/products', element :<Products />}
    ]
  }
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
