import React, { Component } from 'react';
// import SideNavbar from './SideNavBar';
import QuizNotifications from '../quizzes/QuizNotifications';
import QuizList from '../quizzes/QuizList';
import Sidebar from '../dashboard/Sidebar';
// import './Dashboard.css';
// import SideNavBar from './SideNavBar';

class Dashboard extends Component{
    render(){
        return(
            <div>
                <Sidebar />
                <main>
                    <div className="wrapper">
                        <div className="content">
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
                </main>
            </div>
        );
    }
}

export default (Dashboard);