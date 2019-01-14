import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Footer from "../footer/footer";
import "./styles.css";

class CreateQuiz extends Component {
  state = {};
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }
  render() {
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
            >
              <h6 className="left-align light-blue-text">Subject</h6>
              <div className="input-field col s12">
                <select>
                  <option selected value="" disabled>
                    Choose a Subject
                  </option>
                  <option value="geo">Geography</option>
                  <option value="his">History</option>
                  <option value="phy">Physics</option>
                  <option value="chem">Chemistry</option>
                  <option value="web">Web Developing</option>
                  <option value="it">Information Technology</option>
                </select>
              </div>
              <h6 className="left-align light-blue-text">Difficulty Level</h6>
              <div className="input-field col s12">
                <select>
                  <option selected value="" disabled>
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
                <input id="question" type="text" className="validate" />
                <label htmlFor="question">Enter your question</label>
              </div>
              <h6 className="left-align light-blue-text">Answers</h6>
              <div className="input-field col s12">
                <i className="material-icons prefix">looks_one</i>
                <input id="ans1" type="text" className="validate" />
                <label htmlFor="ans1">Option 1</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">looks_two</i>
                <input id="ans2" type="text" className="validate" />
                <label htmlFor="ans2">Option 2</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">looks_3</i>
                <input id="ans3" type="text" className="validate" />
                <label htmlFor="ans3">Option 3</label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">looks_4</i>
                <input id="ans4" type="text" className="validate" />
                <label htmlFor="ans4">Option 4</label>
              </div>
              <h6 className="left-align light-blue-text">
                Select correct option
              </h6>
              <div className="input-field col s12">
                <select>
                  <option selected value="" disabled>
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
        <Footer />
      </div>
    );
  }
}

export default CreateQuiz;
