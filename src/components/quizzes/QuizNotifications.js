import React, { Component } from 'react';

class QuizNotifications extends Component{
    render(){
        return(
            <div className="quiz-notification section">
                <div className="card blue lighten-3 quiz-summary">
                    <span className="card-title">Notification !</span>
                    <p>Posted by Someone</p>
                    <p className="blue-text">Subject</p>
                </div>
            </div>
        )
    }
}

export default QuizNotifications;