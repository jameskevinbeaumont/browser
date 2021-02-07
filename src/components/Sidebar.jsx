import React from 'react';
import { Link } from 'react-router-dom';


function Sidebar({ sidebarStatus, setSidebarStatus }) {
    const navClick = () => {
        setSidebarStatus(false);
    };

    return (
        <div className={`sidebar ${sidebarStatus ? 'active-sidebar' : ''}`}>
            <div className="navs">
                <div className="navs-links">
                    <div className="navs-links__link">
                        <Link to="/" className="navs-links__link-text" onClick={() => navClick()}>upload page</Link>
                    </div>
                    <div className="navs-links__link">
                        <Link to="/history" className="navs-links__link-text" onClick={() => navClick()}>history page</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;