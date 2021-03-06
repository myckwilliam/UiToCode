import React from 'react';

import './Info.css'

const Info = ({ className }) => {
    return (
        <div className={className}> 
            <h1 className="info-title">Mutual Investment</h1>
            <p className="info-info">At Finance we care about your future. We help you invest the way you want. So you can relax, have fun and let your fund grow.</p>
            <div className="info-button-area">
                <button className="info-button">Learn more</button>
                <div className="info-separator"></div>
            </div>
        </div>
     );
}
 
export default Info;