import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Allvegetables from "../page/Allvegetables";
import Blog from "../page/Blog";
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
                loader: ({ params }) => fetch(`http://localhost:5000/vegetables/${params.id}`)
            },
            {
                path: '/userReview',
                element: <PrivateRoute><UserReview></UserReview></PrivateRoute>,
            },
            {
                path: '/review/:id',
                element: <Update></Update>,
                loader: ({params}) =>fetch(`http://localhost:5000/review/${params.id}`)
            },
            {
              path: '/blog',
              element: <Blog></Blog>
            }
        ]
    },
])

export default router;