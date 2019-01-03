import React, { Component } from 'react';

class QuizDetails extends Component{
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    
    handleClick = (e) => {
        e.preventDefault();
        console.log(this.props.details);        
    }
    
    render(){
        return(
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue lighten-3">
                        <div className="card-content white-text">
                            <span className="card-title">{this.props.details.title}</span>
                            <p>{this.props.details.contentSummary}</p>
                        </div>
                        <div className="waves-effect waves-light btn" onClick = {this.handleClick} >button</div>
                        <br/><br/>
                        {/* <div className="card-action"><p>{this.props.details.completeContent}</p></div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default QuizDetails;