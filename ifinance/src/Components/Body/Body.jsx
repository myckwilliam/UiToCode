import React from 'react';
import './Body.css'

const Body = ({ children }) => {
    return ( 
    <div className="body-div">
        {children}
    </div> 
    );
}
 
export default Body;