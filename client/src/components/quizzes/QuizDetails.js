import React, { Component } from 'react';

class QuizDetails extends Component{
    render(){
        return(
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue lighten-3">
                        <div className="card-content white-text">
                            <span className="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">Hello</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuizDetails;