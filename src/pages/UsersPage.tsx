import UsersComponent from "../components/UsersComponent/UsersComponent.tsx";
import {Outlet} from "react-router-dom";
import style from './UsersPage.module.css'

const UsersPage = () => {
    return (
        <div className={style.main}>
            <div><UsersComponent /></div>
            <div><Outlet/></div>
        </div>
    );
};

export default UsersPage;