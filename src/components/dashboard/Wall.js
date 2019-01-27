import React from "react";
import { Link } from "react-router-dom";

const Wall = ({ match }) => {
  console.log(match);
  return (
    <div className="row">
      <p></p>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image green lighten-2 centText">
            <i className="material-icons md-148">multiline_chart</i>
            <div className="card-content white">
              <h4>View your history</h4>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
              <div className="card-action">
                <Link to='/myhistory' className="waves-effect waves-light btn green darken-1">
                  My Progress
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image amber lighten-2 centText">
            <i className="material-icons md-148">whatshot</i>
            <div className="card-content white">
              <h4>Time for a quiz</h4>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
              <div className="card-action">
                <button className="waves-effect waves-light btn amber darken-1 activator">
                  Take a quiz
                </button>
              </div>
            </div>
          </div>
          <div className="card-reveal blue-grey centText">
            <span className="card-title text-darken-4 white-text">
              Select a Level<i className="material-icons right">close</i>
            </span>
            <div className="row">
              <div className="card-content">
                <div className="col s6 m6 offset-s3 offset-m3">
                  <Link
                    className="waves-effect waves-light btn-large"
                    id="button_easy"
                    to="/subjects/easy"
                  >
                    Easy
                  </Link>
                  <Link
                    className="waves-effect waves-light btn-large"
                    id="button_medium"
                    to="/subjects/medium"
                  >
                    Medium
                  </Link>
                  <Link
                    className="waves-effect waves-light btn-large"
                    id="button_hard"
                    to="/subjects/hard"
                  >
                    Hard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image pink lighten-2 centText">
            <i className="material-icons md-148">school</i>
            <div className="card-content white">
              <h4>What's new?</h4>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
              <div className="card-action">
                <button className="waves-effect waves-light btn pink darken-1">
                  Explore Subjects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wall;
