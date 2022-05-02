import React from 'react';
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


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">Pietrusiako's Admin</span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">Main:</p>
                    <li><DashboardIcon className="icon"/><span>Dashboard</span></li>
                    <p className="title">Useful links:</p>
                    <li><GroupIcon className="icon"/><span>Users</span></li>
                    <li><CategoryIcon className="icon"/><span>Products</span></li>
                    <li><ShoppingBagIcon className="icon"/><span>Orders</span></li>
                    <li><LocalShippingIcon className="icon"/><span>Delivery</span></li>
                    <p className="title">Service:</p>
                    <li><QueryStatsIcon className="icon"/><span>Stats</span></li>
                    <li><NotificationsIcon className="icon"/><span>Notifications</span></li>
                    <li><HealthAndSafetyIcon className="icon"/><span>System Health</span></li>
                    <li><AddToQueueIcon className="icon"/><span>Logs</span></li>
                    <li><SettingsIcon className="icon"/><span>Settings</span></li>
                    <p className="title">User:</p>
                    <li><AccountCircleIcon className="icon"/><span>Profile</span></li>
                    <li><LogoutIcon className="icon"/><span>Log out</span></li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
};

export default Sidebar;
