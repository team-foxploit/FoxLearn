import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./styles.css";

class CreateQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      difficulty: "",
      question: "",
      ans1: "",
      ans2: "",
      ans3: "",
      ans4: "",
      correctAns: "",
      didSubmit: "false"
    };
    this.state = { value: "default" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // triggered everytime value changes in our textboxes
  handleChange(event) {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
  }

  // triggered on submit
  handleSubmit = event => {
    //alert(this.state.subject + "\n" + this.state.difficulty);
    event.preventDefault();
    const QUEST = {
      subject: parseInt(this.state.subject, 10),
      difficulty: this.state.difficulty,
      question: this.state.question
    };

    const ANS = {
      ans1: this.state.ans1,
      ans2: this.state.ans2,
      ans3: this.state.ans3,
      ans4: this.state.ans4,
      correctAns: parseInt(this.state.correctAns, 10)
    };
    console.log(QUEST);
    console.log(ANS);
    const quiz = {
      QUEST,
      ANS,
      Tch_ID: JSON.parse(sessionStorage.getItem("Teacher")).Tch_ID
    };
    console.log(quiz);
    console.log(this.state);
    axios
      .put(`https://foxlearn-api.herokuapp.com/api/quiz/create`, quiz)
      .then(res => {
        console.log(res);
        if (res.data.status === "success") {
          this.setState(
            {
              didSubmit: "true"
            },
            () => {}
          );
        }
      });
    var existing = localStorage.getItem("submittedQuests");
    // existing = existing ? JSON.parse(existing) : {};
    console.log(existing);
    existing = {
      existing,
      quiz
    };
    console.log(existing);
    console.log(JSON.parse(sessionStorage.getItem("Teacher")).Tch_ID);
    localStorage.setItem("submittedQuests", JSON.stringify(existing));
    console.log("2");
  };

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }
  render() {
    if (this.state.didSubmit === "true") {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <div className="container grey lighten-3">
          <div>
            <h2 className="light-blue-text center-align">Submit a Quiz</h2>
            <br />
          </div>
          <div className="row">
            <form
              className="col s12 m6 offset-m3 light-blue-text"
              name="action"
              onSubmit={this.handleSubmit}
            >
              <h6 className="left-align light-blue-text">Subject</h6>
              <div className="input-field col s12">
                <select
                  value={this.state.value}
                  onChange={this.handleChange}
                  name="subject"
                >
                  <option value="default" disabled>
                    Choose a Subject
                  </option>
                  <option value="3001">Geography</option>
                  <option value="3006">History</option>
                  <option value="3003">Physics</option>
                  <option value="3002">Chemistry</option>
                  <option value="3004">Web Developing</option>
                  <option value="3005">Information Technology</option>
                </select>
              </div>
              <h6 className="left-align light-blue-text">Difficulty Level</h6>
              <div className="input-field col s12">
                <select
                  value={this.state.value}
                  onChange={this.handleChange}
                  name="difficulty"
                >
                  <option value="default" disabled>
                    Choose difficulty level
                  </option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <h6 className="left-align light-blue-text">Question</h6>
              <div className="input-field col s12">
                <i className="material-icons prefix">question_answer</i>
                <input
                  id="question"
                  type="text"
                  className="validate"
                  name="question"
                  onChange={this.handleChange}
                />
                <label htmlFor="question">Enter your question</label>
              </div>
              <h6 className="left-align light-blue-text">Answers</h6>
              <div className="input-field col s12">
                <i className="material-icons prefix">looks_one</i>
                <input
                  id="ans1"
                  name="ans1"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="ans1">Option 1</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">looks_two</i>
                <input
                  id="ans2"
                  name="ans2"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="ans2">Option 2</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">looks_3</i>
                <input
                  id="ans3"
                  name="ans3"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="ans3">Option 3</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">looks_4</i>
                <input
                  id="ans4"
                  name="ans4"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="ans4">Option 4</label>
              </div>
              <h6 className="left-align light-blue-text">
                Select correct option
              </h6>
              <div className="input-field col s12">
                <select
                  value={this.state.value}
                  onChange={this.handleChange}
                  name="correctAns"
                >
                  <option value="default" disabled>
                    Correct Answer
                  </option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
              </div>
              <button
                className="btn waves-effect waves-light light-blue"
                type="submit"
                name="action"
              >
                <i className="material-icons left">beenhere</i>Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateQuiz;
