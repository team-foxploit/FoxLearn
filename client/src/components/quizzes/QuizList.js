import React, { Component } from 'react';

class QuizList extends Component{
    render(){
        return(
            <div className="quiz-list section">
                <div className="card quiz-summary">
                    <span className="card-title">Quiz Title</span>
                    <p>Posted by Someone</p>
                    <p className="blue-text">Subject</p>
                </div>
                <div className="card quiz-summary">
                    <span className="card-title">Quiz Title</span>
                    <p>Posted by Someone</p>
                    <p className="blue-text">Subject</p>
                </div>
                <div className="card quiz-summary">
                    <span className="card-title">Quiz Title</span>
                    <p>Posted by Someone</p>
                    <p className="blue-text">Subject</p>
                </div>
            </div>
        )
    }
}

export default QuizList;