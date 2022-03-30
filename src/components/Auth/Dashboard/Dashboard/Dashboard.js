import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './Dashboard.css';


const Dashboard = () => {
    const [active, setActive] = useState('dashboard');

    const handleContent = (e, active) => {
        setActive(active);
        e.preventDefault();
    }



    return (
        <div className="dashboard">
            <DashboardHeader></DashboardHeader>
            <div className="row">
                <div className="col-lg-2 col-sm-2 dashboard-sidebar">
                    <ul>
                        <a onClick={(e) => handleContent(e, 'dashboard')} href="#0">
                            <li className={active === 'dashboard' ? 'active' : ''}>Dashboard</li>
                        </a>
                        <a onClick={(e) => handleContent(e, 'myorders')} href="#0">
                            <li className={active === 'myorders' ? 'active' : ''}>My Orders</li>
                        </a>
                        <a onClick={(e) => handleContent(e, 'mangeorders')} href="#0">
                            <li className={active === 'mangeorders' ? 'active' : ''}>Manage Orders</li>
                        </a>
                        <a onClick={(e) => handleContent(e, 'addmovies')} href="#0">
                            <li className={active === 'addmovies' ? 'active' : ''}>Add Movies</li>
                        </a>
                        <a onClick={(e) => handleContent(e, 'addblogs')} href="#0">
                            <li className={active === 'addblogs' ? 'active' : ''}>Add Blogs</li>
                        </a>
                    </ul>
                </div>
                <div className="col-lg-9 col-sm-9 dashboard-main-section">

                </div>
            </div>
        </div>
    );
};

export default Dashboard;