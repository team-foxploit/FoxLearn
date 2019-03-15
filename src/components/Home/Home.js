import React from 'react';
// import { Link } from "react-router-dom";
import lifecycle from 'react-pure-lifecycle';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import img1 from "../../assets/images/slider/1.jpg";
// import img2 from "../../assets/images/slider/2.jpg";
// import img3 from "../../assets/images/slider/3.jpg";
// import img4 from "../../assets/images/slider/4.jpg";
import img5 from "../../assets/images/parallax/1.jpg";
import img6 from "../../assets/images/parallax/2.jpg";
import img7 from "../../assets/images/parallax/3.jpg";
import Carousel from '../Carousel/Carousel';
import style from './Home.module.css';
// import Navbar from '../../containers/Navbar/Navbar';
// TODO : replace a with Link

const methods = {
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
}

const Home = (props) => {
    return (
        <div>
            <Navbar/>
                <Carousel />
                <div className="container">
                  <div className="section">
                    <div className="row">
                      <div className="col s12 center">
                        <h3>
                          <i className="mdi-content-send brown-text" />
                        </h3>
                        <h4 className={style.quote}>
                          "Tell me and I forget. Teach me and I remember. Involve me and
                          I learn."
                        </h4>
                        <p className={style.description}>
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
                        <a
                          href="/signin"
                          id="download-button"
                          className="btn-large waves-effect waves-light teal lighten-1"
                        >
                          Get Started
                        </a>
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
                        <br />
                        <br />
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

    )
}

export default lifecycle(methods)(Home);
