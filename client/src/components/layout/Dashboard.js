import React from 'react';
// import Navbar from './Navbar';
// import SideNavbar from './SideNavBar';
import QuizNotifications from '../quizzes/QuizNotifications';
import QuizList from '../quizzes/QuizList';

import './Dashboard.css';

const Dashboard = () => {
    return(
        <div>
            <div className="wrapper">
                    {/* <SideNavbar /> */}
                <div className="content">
                    {/* <Navbar /> */}
                </div>
            </div>
            <div className="dashboard-container">
                <div className="row">
                    <aside className="col s10 m5">
                        <QuizList />
                    </aside>
                    <aside className="col s6 m2 offset-m1 right">
                        <QuizNotifications />
                    </aside>
                </div>
            </div>
        </div>

    );
}

export default Dashboard;