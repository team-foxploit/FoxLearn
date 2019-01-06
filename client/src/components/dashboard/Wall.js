import React from "react";

const Wall = () => {
  return (
    <div className="row">
      <h1> </h1>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image green lighten-2">
            <i className="material-icons md-148">multiline_chart</i>
            <div class="card-content white">
              <h4>View your history</h4>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
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
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image amber lighten-2">
            <i className="material-icons md-148">whatshot</i>
            <div class="card-content white">
              <h4>Time for a quiz</h4>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
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
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image pink lighten-2">
            <i className="material-icons md-148">school</i>
            <div class="card-content white">
              <h4>What's new?</h4>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
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
  );
};

export default Wall;
