import {Link, Outlet} from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>home</Link></li>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Header;