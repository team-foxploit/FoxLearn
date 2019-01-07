import React from "react";

const WallTeacher = () => {
  return (
    <div className="row">
      <p />
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image green lighten-2">
            <i className="material-icons md-148">multiline_chart</i>
            <div className="card-content white">
              <h4>View your history</h4>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
              <div className="card-action">
                <button className="waves-effect waves-light btn green darken-1">
                  My Progress
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image amber lighten-2">
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
                  Submit a quiz
                </button>
              </div>
            </div>
          </div>
          <div className="card-reveal blue-grey">
            <span className="card-title text-darken-4 white-text">
              Select a Level<i className="material-icons right">close</i>
            </span>
            <div className="row">
              <div className="card-content">
                <div className="col s6 m6 offset-s3 offset-m3">
                  <a
                    className="waves-effect waves-light btn-large"
                    id="button_easy"
                    href="#link"
                  >
                    Easy
                  </a>
                  <a
                    className="waves-effect waves-light btn-large"
                    id="button_medium"
                    href="#link"
                  >
                    Medium
                  </a>
                  <a
                    className="waves-effect waves-light btn-large"
                    id="button_hard"
                    href="#link"
                  >
                    Hard
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image pink lighten-2">
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

export default WallTeacher;
