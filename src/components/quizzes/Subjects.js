import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../layout/styles.css";
import imgPhy from "../images/subject/phy.jpg";
import imgChem from "../images/subject/chem.png";
import imgGeo from "../images/subject/geo.png";
import imgHis from "../images/subject/his.jpg";
import imgIT from "../images/subject/it.jpg";
import imgWeb from "../images/subject/web.jpg";

class Subject extends Component {
  state = {
    difficulty: ""
  };

  constructor(props){
      super(props);
      console.log(props);
  }

  componentDidMount() {
    console.log(this.props);
    this.setState(
      {
        difficulty: this.props.location.pathname.split("/")[2]
      },
      () => console.log(this.state)
    );
  }

  render() {
    return (
      <div>
        <div className="grey lighten-2">
          <div className="grey darken-3">
            <div className="row">
              <div className="col s12 m4">
                <div className="card large vertical" id="geography">
                  <div className="card-image">
                    <img src={imgGeo} alt="" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content grey white-text">
                      <p>
                        The study of Geography focuses on understanding the
                        physical aspects of our planet, the atmosphere and
                        everything in between such as relationships between
                        people and their environments.
                      </p>
                    </div>
                    <div className="card-action blue-grey centText">
                      <Link to="/quiz/3001">Geography</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card large vertical">
                  <div className="card-image">
                    <img src={imgPhy} alt="" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content grey white-text">
                      <p>
                        Physics is a Natural Science, and its main goal is to
                        understand how the universe behaves through
                        understanding matter and its motion and behaviour
                        through time and space.
                      </p>
                    </div>
                    <div className="card-action blue-grey centText">
                      <Link to="/quiz/3003">Physics</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card large vertical">
                  <div className="card-image">
                    <img src={imgChem} alt="" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content grey white-text">
                      <p>
                        Chemistry is the study of matter, its properties, how
                        and why substances combine or separate to form other
                        substances, and how substances interact with energy.
                      </p>
                    </div>
                    <div className="card-action blue-grey centText">
                      <Link to="/quiz/3002">Chemistry</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m4">
                <div className="card large vertical">
                  <div className="card-image">
                    <img src={imgWeb} alt="" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content grey white-text">
                      <p>
                        Web Development. Web development refers to building,
                        creating, and an maintaining websites. It includes
                        aspects such as web design, web publishing, web
                        programming, and database management.
                      </p>
                    </div>
                    <div className="card-action blue-grey centText">
                      <Link to="/quiz/3004">Web Developing</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card large vertical">
                  <div className="card-image">
                    <img src={imgIT} alt="" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content grey white-text">
                      <p>
                        A working knowledge of computer software is essential in
                        today's world. Of particular importance are the various
                        programs used to create spreadsheets, databases and
                        other documents.
                      </p>
                    </div>
                    <div className="card-action blue-grey centText">
                      <Link to="/quiz/3005">Information Technology</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card large vertical">
                  <div className="card-image">
                    <img src={imgHis} alt="" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content grey white-text">
                      <p>
                        Understanding the past is important on so many levels.
                        History helps us make sense of the world we live in
                        today. It helps us learn from past mistakes and make
                        more informed decisions for a better future.
                      </p>
                    </div>
                    <div className="card-action blue-grey centText">
                      <Link to="/quiz/3006">History</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subject;
