import React from 'react';
import { Link } from "react-router-dom";
import lifecycle from 'react-pure-lifecycle';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../UI/Footer/Footer';
// import img1 from "../../assets/images/slider/1.jpg";
// import img2 from "../../assets/images/slider/2.jpg";
// import img3 from "../../assets/images/slider/3.jpg";
// import img4 from "../../assets/images/slider/4.jpg";
import img5 from "../../assets/images/parallax/1.jpg";
import img6 from "../../assets/images/parallax/2.jpg";
import img7 from "../../assets/images/parallax/3.jpg";
import Carousel from '../UI/Carousel/Carousel';
import Card from '../UI/Card/Card';
import Parallax from '../UI/Parallax/Parallax';
import style from './Home.module.css';
// import Navbar from '../../containers/Navbar/Navbar';
// TODO : replace Link with Link

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
                <section className="container">
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
                          learning is no longer confined to Link desk. Sometimes, Link change
                          of scenery is good to break up the monotony. Review your study
                          topics when you’re waiting for the bus to arrive, having lunch
                          in the park or if you’re bored. Casually studying on-the-go is
                          an effective way to multitask and master what you’re learning
                          faster.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <Parallax 
                  title="Become Link member of our growing community!"
                  img={img5}
                  altText="Getting started image"
                  titleColor=" brown-text text-darken-2"
                >
                  <Link
                    to="/signin"
                    id="download-button"
                    className="btn-large waves-effect waves-light lime accent-1 lighten-1"
                  >
                    Get Started
                  </Link>
                </Parallax>
                <section className="container">
                  <div className="section">
                    <div className="row">
                      <div className="col s12 m4">
                        <Card
                          style={style}
                          icon="assessment"
                          title="Self Paced Evaluation!"
                          description="Don’t get discouraged if your friend picks up Link subject
                            faster than you. Everyone learns at their own speed, so
                            figure out what study modes work best for you and stick to
                            it."
                          color="amber darken-3"
                        />
                      </div>
                      <div className="col s12 m4">
                        <Card
                          style={style}
                          icon="group"
                          title="Community Support!"
                          description="By utilizing elements and principles of Material Design, we
                              were able to create Link framework that incorporates components
                              and animations that provide more feedback to users.
                              Additionally, Link single underlying responsive system across
                              all platforms allow for Link more unified user experience."
                          color="light-blue darken-3"
                        />
                      </div>
                      <div className="col s12 m4">
                        <Card
                          style={style}
                          icon="assignment_ind"
                          title="Learn through Quizes..."
                          description="We have provided detailed documentation as well as specific
                              code examples to help new users get started. We are also
                              always open to feedback and can answer any questions Link user
                              may have about Materialize."
                          color="pink accent-1"
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <Parallax 
                  title="Your classroom is now on clouds!"
                  img={img6}
                  altText="Getting started image"
                  titleColor=" light-blue-text text-lighten-2"
                />
                <div className="container">
                  <div className="section">
                    <div className="row">
                      <div className="col s12 center">
                        <h4>Don't Have an Account yet?</h4>
                        <br />
                        <br />
                        <div className="row center">
                          <Link
                            to="/signup"
                            id="down-button"
                            className="btn-large waves-effect waves-light teal lighten-1"
                          >
                            Sign Up
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Parallax 
                  title="Learn Together, Anywhere, Anytime!"
                  img={img7}
                  altText="Getting started image"
                  titleColor=" light-blue-text text-lighten-2 left-align"
                  parallaxClass="valign-wrapper"
                />
            <Footer />
        </div>

    )
}

export default lifecycle(methods)(Home);
