import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";
import CartComponent from "../components/CartComponent/CartComponent.tsx";

export const router = createBrowserRouter( [
    {path: '', element: <UsersPage/>, children: [
            {path: 'cart/:userId', element: <CartComponent/>}
        ]},
])