import React, { Component } from "react";
import { Link } from 'react-router-dom';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./styles.css";

class QuizCard extends Component {
  state = {
    Q1: {
      question: "",
      crct_id: "",
      answers: ""
    },
    Q2: {
      question: "",
      crct_id: "",
      answers: ""
    },
    Q3: {
      question: "",
      crct_id: "",
      answers: ""
    },
    Q4: {
      question: "",
      crct_id: "",
      answers: ""
    },
    Q5: {
      question: "",
      crct_id: "",
      answers: ""
    },
    q1ans:'',
    q2ans:'',
    q3ans:'',
    q4ans:'',
    q5ans:'',
    marks:''
  };

  componentDidMount(props) {
    // Auto initialize all the things!
    M.AutoInit();
    // M.toast({html: `${this.state.marks}`})
    console.log(this.props.content);
    this.setState(
      {
        Q1: {
          question: this.props.content.Q1[0].Question,
          crct_id: this.props.content.Q1[0].Crct_Ans_Id,
          answers: [
            this.props.content.Q1[0].Answer,
            this.props.content.Q1[1].Answer,
            this.props.content.Q1[2].Answer,
            this.props.content.Q1[3].Answer
          ]
        },
        Q2: {
          question: this.props.content.Q2[0].Question,
          crct_id: this.props.content.Q2[0].Crct_Ans_Id,
          answers: [
            this.props.content.Q2[0].Answer,
            this.props.content.Q2[1].Answer,
            this.props.content.Q2[2].Answer,
            this.props.content.Q2[3].Answer
          ]
        },
        Q3: {
          question: this.props.content.Q3[0].Question,
          crct_id: this.props.content.Q3[0].Crct_Ans_Id,
          answers: [
            this.props.content.Q3[0].Answer,
            this.props.content.Q3[1].Answer,
            this.props.content.Q3[2].Answer,
            this.props.content.Q3[3].Answer
          ]
        },
        Q4: {
          question: this.props.content.Q4[0].Question,
          crct_id: this.props.content.Q4[0].Crct_Ans_Id,
          answers: [
            this.props.content.Q4[0].Answer,
            this.props.content.Q4[1].Answer,
            this.props.content.Q4[2].Answer,
            this.props.content.Q4[3].Answer
          ]
        },
        Q5: {
          question: this.props.content.Q5[0].Question,
          crct_id: this.props.content.Q5[0].Crct_Ans_Id,
          answers: [
            this.props.content.Q5[0].Answer,
            this.props.content.Q5[1].Answer,
            this.props.content.Q5[2].Answer,
            this.props.content.Q5[3].Answer
          ]
        }
      },
      () => {
        console.log(this.state);
      }
    );
  }

  handleChange = (e) => {
    console.log(this.props);
    const { name, value } = e.target;
    this.setState({
      [name]: value
    }, () => {
        console.log(this.state);
    });
  }

  handleSubmit = (e) => {
      e.preventDefault();
      const status = Object.keys(this.state.q1ans).length && Object.keys(this.state.q2ans).length && Object.keys(this.state.q3ans).length && Object.keys(this.state.q4ans).length && Object.keys(this.state.q5ans).length ;
      console.log(status);
      if (status === 1) {
          // check answers
          localStorage.setItem(status, JSON.stringify(this.state));
          let qmarks = 0;
          console.log(this.state);
          console.log(this.state.Q1.crct_id);
          if (this.state.q1ans === `${this.state.Q1.crct_id}`) {
              qmarks++;
          }
           if (this.state.q2ans === `${this.state.Q2.crct_id}`) {
              qmarks++;
          }
          if (this.state.q3ans === `${this.state.Q3.crct_id}`) {
              qmarks++;
          }
          if (this.state.q4ans === `${this.state.Q4.crct_id}`) {
              qmarks++;
          }
          if (this.state.q5ans === `${this.state.Q5.crct_id}`) {
              qmarks++;
          }
          this.setState({
              marks:qmarks
          }, () => {
              console.log(this.state);
              M.toast({html: `Your Marks : ${this.state.marks}!`});
          });

      }

  }

  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col s12 m6 offset-m3">
              <div className="card">
                <div className="card-content blue-grey white-text">
                  <h2>Subject</h2>
                </div>
                <div className="card-content blue-grey lighten-5">
                  {/* Q1 */}
                  <div id="q1">
                    <h5 className="left-align">{this.state.Q1.question}</h5>
                    <div className="row">
                      <div className="col s12 m6 offset-m3">
                        <form action="#" className="left-align">
                          <p>
                            <label>
                              <input name="q1ans" value="1" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q1.answers[0]}</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="q1ans" value="2" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q1.answers[1]}</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="q1ans" value="3" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q1.answers[2]}</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="q1ans" value="4" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q1.answers[3]}</span>
                            </label>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Q2 */}
                  <div id="q2">
                    <h5 className="left-align">{this.state.Q2.question}</h5>
                    <div className="row">
                      <div className="col s12 m6 offset-m3">
                        <form action="#" className="left-align">
                          <p>
                            <label>
                              <input name="q2ans" value="1" type="radio" />
                              <span>{this.state.Q2.answers[0]}</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="q2ans" value="2" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q2.answers[1]}</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="q2ans" value="3" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q2.answers[2]}</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="q2ans" value="4" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q2.answers[3]}</span>
                            </label>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Q3 */}
                  <div id="q3">
                    <h5 className="left-align">{this.state.Q3.question}</h5>
                    <div className="row">
                      <div className="col s12 m6 offset-m3">
                        <form action="#" className="left-align">
                          <p>
                            <label>
                              <input name="q3ans" value="1" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q3.answers[0]}</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="q3ans" value="2" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q3.answers[1]}</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="q3ans" value="3" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q3.answers[2]}</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="q3ans" value="4" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q3.answers[3]}</span>
                            </label>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Q4 */}
                  <div id="q4">
                    <h5 className="left-align">{this.state.Q4.question}</h5>
                    <div className="row">
                      <div className="col s12 m6 offset-m3">
                        <form action="#" className="left-align">
                          <p>
                            <label>
                              <input name="q4ans" value="1" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q4.answers[0]}</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="q4ans" value="2" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q4.answers[1]}</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="q4ans" value="3" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q4.answers[2]}</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="q4ans" value="4" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q4.answers[3]}</span>
                            </label>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Q5 */}
                  <div id="q5">
                    <h5 className="left-align">{this.state.Q5.question}</h5>
                    <div className="row">
                      <div className="col s12 m6 offset-m3">
                        <form action="#" className="left-align">
                          <p>
                            <label>
                              <input name="q5ans" value="1" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q5.answers[0]}</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="q5ans" value="2" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q5.answers[1]}</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="q5ans" value="3" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q5.answers[2]}</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="q5ans" value="4" type="radio" onClick={this.handleChange} />
                              <span>{this.state.Q5.answers[3]}</span>
                            </label>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* submit */}
                  <div id="endOfQuiz">
                    <div className="center-align">
                      <h6>
                        Done? <br /> Submit the Quiz
                      </h6>
                      <br />
                      <br />
                      <Link to='/dashboard/result' className="btn-floating btn-large pulse" onClick={this.handleSubmit}>
                        <i className="material-icons md-48">
                          assignment_turned_in
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-tabs">
                  <ul className="tabs tabs-fixed-width">
                    <li className="tab">
                      <a href="#q1">
                        <i className="material-icons">filter_1</i>
                      </a>
                    </li>
                    <li className="tab">
                      <a href="#q2">
                        <i className="material-icons">filter_2</i>
                      </a>
                    </li>
                    <li className="tab">
                      <a href="#q3">
                        <i className="material-icons">filter_3</i>
                      </a>
                    </li>
                    <li className="tab">
                      <a href="#q4">
                        <i className="material-icons">filter_4</i>
                      </a>
                    </li>
                    <li className="tab">
                      <a href="#q5">
                        <i className="material-icons">filter_5</i>
                      </a>
                    </li>
                    <li className="tab">
                      <a href="#endOfQuiz">
                        <i className="material-icons">check_box</i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizCard;
