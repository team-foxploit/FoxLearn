import React, { Component } from 'react'
import './Sidebar.css'

class Sidebar extends Component {

    render() {
        return (
            <div className="wrapper">
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li><div className="user-view">
                        <div className="background">
                            {/* <img src="img/typing-writing.jpg" alt="" /> */}
                        </div>
                        <a href="#userwithID"><img className="circle" src="download.png" alt="" /></a>
                        <a href="#name"><span className="white-text name">John Doe</span></a>
                        <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i className="material-icons">home</i>Home</a></li>
                    <li><a href="#!"><i className="material-icons">school</i>My Courses</a></li>
                    <li><a href="#!"><i className="material-icons">star_rate</i>My Ranking</a></li>
                    <li><a href="#!"><i className="material-icons">schedule</i>My History</a></li>
                    <li><a href="#!"><i className="material-icons">timeline</i>Leaderboard</a></li>
                    <li><div className="divider"></div></li>
                    <li><a href="foxlearn@foxploit.com" className="subheader center">@FoxLearn</a></li>
                    <li><div className="waves-effect waves-light btn btn-medium"><i className="material-icons left">cloud</i>Logout</div></li>
                </ul>
            </div>
        );
    };
}

export default Sidebar;