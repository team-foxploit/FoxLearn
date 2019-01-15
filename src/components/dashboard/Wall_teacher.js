import React from "react";
import { Link } from "react-router-dom";

const WallTeacher = () => {
  return (
    <div className="row">
      <p />
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image teal lighten-2 centText">
            <i className="material-icons md-148">assignment_ind</i>
            <div className="card-content white">
              <h4>Student Performance</h4>
              <p>
                Have a glance at your students past performance and their
                progress.
              </p>
              <div className="card-action">
                <button className="waves-effect waves-light btn teal darken-1">
                  See History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image purple lighten-3 centText">
            <i className="material-icons md-148">assignment</i>
            <div className="card-content white">
              <h4>Create a quiz</h4>
              <p>
                Have a question for students? Submit your question here and see
                how students perform in the quizes.
              </p>
              <div className="card-action">
                <Link to='/dashboard/createquiz' className="waves-effect waves-light btn purple darken-1 activator">
                  Submit a quiz
              </Link>
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
              <p>Explore latest updates on FoxLearn!</p>
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
