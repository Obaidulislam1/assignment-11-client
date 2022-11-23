import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Allvegetables from "../page/Allvegetables";
import Blog from "../page/Blog";
import Errorpage from "../page/Errorpage";
import Home from "../page/home/Home";
import Login from "../page/Login";
import PrivateRoute from "../page/PrivateRoute";
import Register from "../page/Register";
import ServiceReview from "../page/ServiceReview";
import Update from "../page/Update";
import UserReview from "../page/UserReview";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allvegetables',
                element: <Allvegetables></Allvegetables>
            },
            {
                path: '/serviceReview/:id',
                element: <ServiceReview></ServiceReview>,
                loader: ({ params }) => fetch(`https://assignment-11-server-psi.vercel.app/vegetables/${params.id}`)
            },
            {
                path: '/userReview',
                element: <PrivateRoute><UserReview></UserReview></PrivateRoute>,
            },
            {
                path: '/review/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://assignment-11-server-psi.vercel.app/review/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <Errorpage></Errorpage>
            }
        ]
    },
])

export default router;