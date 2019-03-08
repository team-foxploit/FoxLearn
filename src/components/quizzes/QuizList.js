import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import QuizDetails from './QuizDetails';
import QuizSummary from './QuizSummary';

class QuizList extends Component{
    state = {
        title: 'Subject',
        author: 'author-1',
        qid : 'id-1',
        contentSummary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, animi facilis pariatur',
        completeContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, et illum. Quos dicta aperiam cupiditate dignissimos, beatae recusandae hic, obcaecati, quam doloremque dolores laborum voluptatem molestiae. Molestiae nemo accusantium unde.'
    }
    render(){
        return(
            <div className="quiz-list section">
                <QuizSummary />
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
                {/* <BrowserRouter >
                    <Switch >
                        <Route path = "/:id" component={ QuizDetails } />
                    </Switch>
                </BrowserRouter> */}
                <QuizDetails details = {this.state} />
            </div>
        )
    }
}

export default QuizList;