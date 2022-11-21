import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Allvegetables from "../page/Allvegetables";
import Home from "../page/home/Home";
import Login from "../page/Login";
import Register from "../page/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
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
            }
        ]
    },
])

export default router;