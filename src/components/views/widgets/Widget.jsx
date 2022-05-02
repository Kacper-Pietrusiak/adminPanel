import React from 'react';
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Widget = ({title, icon, link, isMoney, value, percentage}) => {


    return (
        <div className="widget">
            <div className="left">
                <span className="title">{title}</span>
                <span className="counter">{isMoney && "$"}{value}</span>
                <span className="link">{link}</span>
            </div>
            <div className="right">
                <div className="percentages positive">
                    <KeyboardArrowUpIcon/> {percentage}%
                </div>
                {icon}
            </div>
        </div>
    );
};

export default Widget;
