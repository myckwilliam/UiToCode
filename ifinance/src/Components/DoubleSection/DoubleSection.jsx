import React from 'react';

import './DoubleSection.css'

const DoubleSection = ({ children }) => {
    return ( 
        <div className="double-section">
            {children}
        </div>
     );
}
 
export default DoubleSection;