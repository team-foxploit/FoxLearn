import React, { Component } from "react";
// import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
import "./styles.css";
import axios from 'axios';
import Loader from 'react-loader-spinner';
import QuizCard from './QuizCard';

class Quiz extends Component {

  state = {
      subject:'',
      question:'',
      answers:{},
      crct_id:'',
      fetchDone:false
  }

  constructor(props){
      super(props);
      console.log(this.props);
  }

  componentDidMount() {
    // Auto initialize all the things!
    // M.AutoInit();
    console.log('in the Quiz');
    axios.post(`https://foxlearn-api.herokuapp.com/api/quiz`, {
    	"Q_ID":"5001",
    	"Subject":"Chemistry",
    	"Difficulty":"easy"
    } )
    .then( res => {
        console.log(res.data);
        this.setState({
            subject:res.data[0][0].Subject_Name,
            question:res.data[0][0].Question,
            answers:[res.data[0][0].Answer, res.data[0][1].Answer, res.data[0][2].Answer, res.data[0][3].Answer],
            crct_id:res.data[0][0].Crct_Ans_Id,
            fetchDone:true
        }, () => {
            console.log(this.state);
        })
    })
    .catch(
        err => {
            console.log(err);
        }
    );
  }


  render() {
      if (this.state.fetchDone) {
          return (
              <QuizCard content={this.state} />
          );
      } else {
          return (
              <PreLoader />
          );
      }
  }
}

function PreLoader() {
    return(
        <div className="container center">
            <Loader
                type="Rings"
                color="#005500"
                height="300"
                width="300"
            />
        </div>
    )
}

export default Quiz;
