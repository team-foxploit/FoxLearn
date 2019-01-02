import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "./styles.css";
import Footer from "../footer/footer";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="dash background blue-grey">
        <Sidebar />
        <div className="row">
          <div className="col s4">
            <div className="card">
              <div className="card-image green lighten-2">
                <i className="material-icons md-196">multiline_chart</i>
                <div class="card-content white">
                  <h4>View your history</h4>
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                  <div class="card-action">
                    <button className="waves-effect waves-light btn green darken-1">
                      My Progress
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s4">
            <div className="card">
              <div className="card-image amber lighten-2">
                <i className="material-icons md-196">whatshot</i>
                <div class="card-content white">
                  <h4>Time for a quiz</h4>
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                  <div class="card-action">
                    <button className="waves-effect waves-light btn amber darken-1">
                      Take a quiz
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col s4">
            <div className="card">
              <div className="card-image pink lighten-2">
                <i className="material-icons md-196">school</i>
                <div class="card-content white">
                  <h4>What's new?</h4>
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                  <div class="card-action">
                    <button className="waves-effect waves-light btn pink darken-1">
                      Explore Subjects
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
