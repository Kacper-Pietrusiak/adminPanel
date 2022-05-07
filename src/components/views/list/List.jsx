import React from 'react';
import Sidebar from "../../common/sidebar/Sidebar";
import Navbar from "../../common/navbar/Navbar";
import Datatable from "../../common/datatable/Datatable";
import './list.scss'

const List = () => {
    return (
        <div className='list'>
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Datatable/>
            </div>
        </div>
    );
};

export default List;
                        