import React, { Component } from "react";
import "./styles.css";
import axios from 'axios';
import Loader from 'react-loader-spinner';
import QuizCard from './QuizCard';

class Quiz extends Component {
  state = {
      Q1:'',
      Q2:'',
      Q3:'',
      Q4:'',
      Q5:'',
      fetchDone:false
  }

  constructor(props){
      super(props);
      console.log(props);
      const userDetails = JSON.parse(sessionStorage.getItem('Student'));
      console.log(userDetails.First_Name);
      console.log(this.props);
      console.log(this.props.match.params.sub_id);
  }

  componentDidMount() {
    // Auto initialize all the things!
    console.log('in the Quiz');
    axios.post(`https://foxlearn-api.herokuapp.com/api/quiz`, {
    	"Subject":`${this.props.match.params.sub_id}`,
    	"Difficulty":"easy"
    } )
    .then( res => {
        console.log(res.data);
        this.setState({
            fetchDone:true,
            Q1:res.data[0],
            Q2:res.data[1],
            Q3:res.data[2],
            Q4:res.data[3],
            Q5:res.data[4],
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
