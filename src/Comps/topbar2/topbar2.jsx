import React from 'react';
import './topbar2.css';
// import { NotificationsNone } from '@material-ui/icons';

function topbar2({title1}){
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        
                    </span>
                </div>
                {/* <div className="topbarWrapper">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default topbar2