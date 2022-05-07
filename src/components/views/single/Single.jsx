import React from 'react';
import './single.scss';
import Sidebar from "../../common/sidebar/Sidebar";
import Navbar from "../../common/navbar/Navbar";
import Chart from "../../common/chart/Chart";


const Single = () => {
    return (
        <div className='single'>
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">edit</div>
                        <h1 className="title">information</h1>
                        <div className="item">
                            <img
                                src="https://images.pexels.com/photos/8329871/pexels-photo-8329871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">Coffee</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">cofee@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+33 542 34 12</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">ul. Masna 13</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Polska</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={4 / 1} title="User spending ( Last 6 months )"/>
                    </div>
                </div>
                <div className="bottom"></div>
            </div>
        </div>
    );
};

export default Single;
