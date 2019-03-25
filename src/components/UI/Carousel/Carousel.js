import React from 'react';
import lifecycle from 'react-pure-lifecycle';
// import propTypes from 'prop-types';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import Aux from '../../../hoc/Auxiliary';
import CarouselItem from './CarouselItem';
import img1 from "../../../assets/images/slider/1.jpg";
import img2 from "../../../assets/images/slider/2.jpg";
import img3 from "../../../assets/images/slider/3.jpg";
import img4 from "../../../assets/images/slider/4.jpg";

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
    }
}

const Carousel = (props) => {
    return (
        <Aux>
            <div className="slider">
              <ul className="slides">
                <CarouselItem
                    img={img1}
                    altText="Image-1"
                    title="Think Beyond Limits!"
                    subtitile="Thrive in an immersive learning environment..."
                    titleClass="center-align black-text"
                    subTitleClass="green-text text-lighten-3"
                />
                <CarouselItem
                    img={img2}
                    altText="Image-2"
                    title="An Enhanced Learning Experience"
                    subtitile="Hands-on learning, interactive content, measurable progress."
                    titleClass="left-align black-text"
                    subTitleClass="blue-text text-lighten-3"
                />
                <CarouselItem
                    img={img3}
                    altText="Image-3"
                    title="Supported Journey"
                    subtitile="Build skills for today, tomorrow, and beyond...!"
                    titleClass="right-align white-text"
                    subTitleClass="black-text text-lighten-3"
                />
                <CarouselItem
                    img={img4}
                    altText="Image-4"
                    title="Master the subjects!"
                    subtitile="Become a master of a subject."
                    titleClass="center-align yellow-text"
                    subTitleClass="blue-text text-lighten-3"
                />
              </ul>
            </div>
        </Aux>
    )
}

// Carousel.propTypes = {
//
// }

export default lifecycle(methods)(Carousel);
