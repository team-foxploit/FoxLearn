import React, { Component } from "react";
import Footer from "../footer/footer";
import "../auth/styles.css";
import imgPhy from "../images/subject/phy.jpg";
import imgChem from "../images/subject/chem.png";
import imgGeo from "../images/subject/geo.png";
import imgHis from "../images/subject/his.jpg";
import imgIT from "../images/subject/it.jpg";
import imgWeb from "../images/subject/web.jpg";

class Subject extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="grey lighten-2">
          <div className="container grey darken-3">
            <div className="row">
              <div className="col s12 m4">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={imgGeo} alt="" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content grey white-text">
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information.
                      </p>
                    </div>
                    <div className="card-action blue-grey">
                      <a href="#link">Geography</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={imgPhy} alt="" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content grey white-text">
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information.
                      </p>
                    </div>
                    <div className="card-action blue-grey">
                      <a href="#link">Physics</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={imgChem} alt="" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content grey white-text">
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information.
                      </p>
                    </div>
                    <div className="card-action blue-grey">
                      <a href="#link">Chemistry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m4">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={imgWeb} alt="" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content grey white-text">
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information.
                      </p>
                    </div>
                    <div className="card-action blue-grey">
                      <a href="#link">Web Developing</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={imgIT} alt="" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content grey white-text">
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information.
                      </p>
                    </div>
                    <div className="card-action blue-grey">
                      <a href="#link">Information Technology</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={imgHis} alt="" />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content grey white-text">
                      <p>
                        I am a very simple card. I am good at containing small
                        bits of information.
                      </p>
                    </div>
                    <div className="card-action blue-grey">
                      <a href="#link">History</a>
                    </div>
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

export default Subject;
