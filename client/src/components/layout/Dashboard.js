import React from 'react';
import Navbar from './Navbar';
import SideNavbar from './SideNavBar';

// import './Dashboard.css';

const Dashboard = () => {
    return(
        <div className="wrapper">
            <Navbar />
            <SideNavbar />
        </div>
    );
}

export default Dashboard;