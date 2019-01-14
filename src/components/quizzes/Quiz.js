import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./styles.css";

class Quiz extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
    console.log("in the Quiz");
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
                    <h5 className="left-align">Question 1</h5>
                    <div className="row">
                      <div className="col s12 m6 offset-m3">
                        <form action="#" className="left-align">
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer1</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer2</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer3</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer4</span>
                            </label>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Q2 */}
                  <div id="q2">
                    <h5 className="left-align">Question 2</h5>
                    <div className="row">
                      <div className="col s12 m6 offset-m3">
                        <form action="#" className="left-align">
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer1</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer2</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer3</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer4</span>
                            </label>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Q3 */}
                  <div id="q3">
                    <h5 className="left-align">Question 3</h5>
                    <div className="row">
                      <div className="col s12 m6 offset-m3">
                        <form action="#" className="left-align">
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer1</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer2</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer3</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer4</span>
                            </label>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Q4 */}
                  <div id="q4">
                    <h5 className="left-align">Question 4</h5>
                    <div className="row">
                      <div className="col s12 m6 offset-m3">
                        <form action="#" className="left-align">
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer1</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer2</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer3</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer4</span>
                            </label>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Q5 */}
                  <div id="q5">
                    <h5 className="left-align">Question 5</h5>
                    <div className="row">
                      <div className="col s12 m6 offset-m3">
                        <form action="#" className="left-align">
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer1</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer2</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer3</span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input name="ans" type="radio" />
                              <span>Answer4</span>
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
                      <a className="btn-floating btn-large pulse" href="#link">
                        <i className="material-icons md-48">
                          assignment_turned_in
                        </i>
                      </a>
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

export default Quiz;
