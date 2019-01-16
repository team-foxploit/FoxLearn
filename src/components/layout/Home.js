import React, { Component } from "react";
// Import Materialize
import M from "materialize-css";
import MainNavbar from './MainNavbar';
import img1 from "../images/slider/1.jpg";
import img2 from "../images/slider/2.jpg";
import img3 from "../images/slider/3.jpg";
import img4 from "../images/slider/4.jpg";
import img5 from "../images/parallax/1.jpg";
import img6 from "../images/parallax/2.jpg";
import img7 from "../images/parallax/3.jpg";
import Footer from "../footer/footer";
import "./styles.css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from 'react-router-dom';

class SignIn extends Component {
  componentDidMount() {
    let elems = document.querySelectorAll(".slider");
    let options = {
      indicators: true,
      height: 400,
      duration: 500,
      interval: 3000
    };
    M.Slider.init(elems, options);

    let elems_para = document.querySelectorAll(".parallax");
    let options_para = {
      responsiveThreshold: 0
    };
    M.Parallax.init(elems_para, options_para);
  }

  render() {
    return (
      <div>
          <MainNavbar />
        <div className="slider">
          <ul className="slides">
            <li>
              <img src={img1} alt="" />
              <div className="caption left-align white-text">
                <h2>Think Beyond Limits!</h2>
                <h5 className="light white-text">
                  Thrive in an immersive learning environment.
                </h5>
              </div>
            </li>
            <li>
              <img src={img2} alt="" />
              <div className="caption center-align">
                <h3>A Groundbreaking Learning Experience</h3>
                <h5 className="light grey-text text-lighten-3">
                  Hands-on learning, interactive content, measurable progress.
                </h5>
              </div>
            </li>
            <li>
              <img src={img3} alt="" />
              <div className="caption left-align">
                <h3>Supported Journey</h3>
                <h5 className="light grey-text text-lighten-3">
                  Build skills for today, tomorrow, and beyond.
                </h5>
              </div>
            </li>
            <li>
              <img src={img4} alt="" />
              <div className="caption center-align">
                <h3>Master the subjects!</h3>
                <h5 className="light grey-text text-lighten-3">
                  Become a master of a subject.
                </h5>
              </div>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 center">
                <h3>
                  <i className="mdi-content-send brown-text" />
                </h3>
                <h4>
                  "Tell me and I forget. Teach me and I remember. Involve me and I learn."
                </h4>
                <p className="left-align light">
                  For better or worse, with technology and mobile devices,
                  learning is no longer confined to a desk. Sometimes, a change
                  of scenery is good to break up the monotony. Review your study
                  topics when you’re waiting for the bus to arrive, having lunch
                  in the park or if you’re bored. Casually studying on-the-go is
                  an effective way to multitask and master what you’re learning
                  faster.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <br />
              <h1 className="header center teal-text text-lighten-2">
                Become a member of our growing community!
              </h1>
              <br />
              <div className="row center">
                <Link
                  to="/signin"
                  id="download-button"
                  className="btn-large waves-effect waves-light teal lighten-1"
                >
                  Get Started
              </Link>
              </div>
              <br />
              <br />
            </div>
          </div>
          <div className="parallax">
            <img src={img5} alt="Unsplashed background img 1" />
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons md-36">assessment</i>
                  </h2>
                  <h5 className="center">Self Paced Evaluation</h5>

                  <p className="light">
                    Don’t get discouraged if your friend picks up a subject
                    faster than you. Everyone learns at their own speed, so
                    figure out what study modes work best for you and stick to
                    it.
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons md-36">group</i>
                  </h2>
                  <h5 className="center">Community Support</h5>

                  <p className="light">
                    By utilizing elements and principles of Material Design, we
                    were able to create a framework that incorporates components
                    and animations that provide more feedback to users.
                    Additionally, a single underlying responsive system across
                    all platforms allow for a more unified user experience.
                  </p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons md-36">assignment_ind</i>
                  </h2>
                  <h5 className="center">Learn through Quizes</h5>

                  <p className="light">
                    We have provided detailed documentation as well as specific
                    code examples to help new users get started. We are also
                    always open to feedback and can answer any questions a user
                    may have about Materialize.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h2 className="header col s12 light white-text">
                  Your classroom is now on clouds!
                </h2>
              </div>
            </div>
          </div>
          <div className="parallax">
            <img src={img6} alt="Unsplashed background img 2" />
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 center">
                <h4>Don't Have an Account yet?</h4>
                <br/>
                <br/>
                <div className="row center">
                  <a
                    href="/signup"
                    id="down-button"
                    className="btn-large waves-effect waves-light teal lighten-1"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax-container valign-wrapper">
          <div className="section no-pad-bot">
            <div className="container right-align">
              <div className="row center">
                <h3 className="col s12 light left-align white-text">
                  Learn together
                  <br /> Anywhere, anytime!
                </h3>
              </div>
            </div>
          </div>
          <div className="parallax">
            <img src={img7} alt="Unsplashed background img 3" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignIn;
