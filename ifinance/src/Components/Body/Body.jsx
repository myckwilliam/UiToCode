import React from 'react';
import './Body.css'

const Body = ({ children, className }) => {
    return ( 
    <div className={className + ' ' + "body-div"}>
        {children}
    </div> 
    );
}
 
export default Body;