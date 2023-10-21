import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import BrandProducts from "../Pages/brandProducts/brandProducts";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";



const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,

        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/products/:brandname',
                element:<BrandProducts></BrandProducts>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.brandname}`)
            },
            {
                path:'/sign-in',
                element:<SignIn></SignIn>
            },
            {
                path:'/sign-up',
                element:<SignUp></SignUp>
            }
        ]    
    }
])

export default Router;