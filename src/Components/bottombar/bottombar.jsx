import React from 'react';
import './bottombar.css';
// import { NotificationsNone } from '@material-ui/icons';

function bottombar({title1}){
    return (
        <div className="bottombar">
            <div className="bottombarWrapper">
                <div className="bottomLeft">
                    <span className="logo">
                        
                    </span>
                </div>
                {/* <div className="bottombarWrapper">
                    <div className="bottombarIconContainer">
                        <NotificationsNone />
                        <span className="bottomIconBadge">2</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default bottombar