import React from 'react';
import './home.scss';
import Sidebar from "../../common/sidebar/Sidebar";
import Navbar from "../../common/navbar/Navbar";
import Widget from "../widgets/Widget";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget title='USER' isMoney={false} link='See all users'
                            icon={<PersonIcon style={{background: "greenyellow"}} className='icon'/>} value='120'
                            percentage='17'/>
                    <Widget title='ORDER' isMoney={false} link='View all orders'
                            icon={<ShoppingCartIcon style={{background: "cyan"}} className='icon'/>} value='76'
                            percentage='16'/>
                    <Widget title='EARNINGS' isMoney={true} link='View net earnings'
                            icon={<MonetizationOnIcon style={{background: "yellow"}} className='icon'/>} value='12332'
                            percentage='13'/>
                    <Widget title='BALANCE' isMoney={true} link='See details'
                            icon={<AccountBalanceWalletIcon style={{background: "red"}} className='icon'/>}
                            value='12332' percentage='13'/>
                </div>
            </div>
        </div>
    );
};

export default Home;
