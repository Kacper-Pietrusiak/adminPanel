import React, {useContext} from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import {Link} from "react-router-dom";
import {DarkModeContext} from "../../../context/darkModeContext";


const Sidebar = () => {

    const {dispatch} = useContext(DarkModeContext)


    return (
        <div className='sidebar'>
            <div className="top">
                <Link to='/' style={{textDecoration: 'none'}}>
                    <span className="logo">Pietrusiako's Admin</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">Main:</p>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <li><DashboardIcon className="icon"/><span>Dashboard</span></li>
                    </Link>
                    <p className="title">Lists:</p>
                    <Link to='/users' style={{textDecoration: 'none'}}>
                        <li><GroupIcon className="icon"/><span>Users</span></li>
                    </Link>
                    <Link to='/products' style={{textDecoration: 'none'}}>
                        <li><CategoryIcon className="icon"/><span>Products</span></li>
                    </Link>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <li><ShoppingBagIcon className="icon"/><span>Orders</span></li>
                    </Link>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <li><LocalShippingIcon className="icon"/><span>Delivery</span></li>
                    </Link>
                    <p className="title">Useful:</p>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <li><QueryStatsIcon className="icon"/><span>Stats</span></li>
                    </Link>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <li><NotificationsIcon className="icon"/><span>Notifications</span></li>
                    </Link>
                    <p className="title">Service:</p>
                    <li><HealthAndSafetyIcon className="icon"/><span>System Health</span></li>
                    <li><AddToQueueIcon className="icon"/><span>Logs</span></li>
                    <li><SettingsIcon className="icon"/><span>Settings</span></li>
                    <p className="title">User:</p>
                    <li><AccountCircleIcon className="icon"/><span>Profile</span></li>
                    <li><LogoutIcon className="icon"/><span>Log out</span></li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({type: 'LIGHT'})}></div>
                <div className="colorOption" onClick={() => dispatch({type: 'DARK'})}></div>
            </div>
        </div>
    );
};

export default Sidebar;
