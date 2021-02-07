import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from "../components";

function Nav() {
    const [sidebarStatus, setSidebarStatus] = useState(false);

    return (
        <header className="header">
            <nav className="nav">
                <div className="hamburger" onClick={() => setSidebarStatus(!sidebarStatus)}>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </div>
                <Sidebar
                    sidebarStatus={sidebarStatus}
                    setSidebarStatus={setSidebarStatus}
                />
                <div className="nav-links">
                    <div className="nav-links__link">
                        <Link to="/" className="nav-links__link-text">upload page</Link>
                    </div>
                    <div className="nav-links__link">
                        <Link to="/history" className="nav-links__link-text">history page</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;