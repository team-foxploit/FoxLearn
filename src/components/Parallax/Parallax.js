import React from 'react';
import propTypes from 'prop-types';
import lifecycle from 'react-pure-lifecycle';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import style from './Parallax.module.css';

const methods = {
    componentDidMount() {
        let elems_para = document.querySelectorAll(".parallax");
        let options_para = {
            responsiveThreshold: 0
        };
        M.Parallax.init(elems_para, options_para);
        
    }
}

const Parallax = (props) => {
    let titleClasses = ["header center"];
    titleClasses.push(props.titleColor);
    titleClasses = titleClasses.join(' ');
    let parallaxClasses = ["parallax-container"];
    parallaxClasses.push(props.parallaxClass);
    parallaxClasses = parallaxClasses.join(' ');
    return (
        <div id="index-banner" className={parallaxClasses}>
            <div className="section no-pad-bot">
                <div className="container">
                    <div className={titleClasses}>
                        <p className={style.title}>{props.title}</p>
                      </div>
                    <div className="row center">
                        {props.children}
                    </div>
                </div>
            </div>
            <div className="parallax">
                <img src={props.img} alt={props.altText} />
            </div>
        </div>
    )
}

Parallax.propTypes = {
    title: propTypes.string,
    titleColor: propTypes.string,
    img: propTypes.string,
    parallaxClass: propTypes.string,
    altText: propTypes.string
}

export default lifecycle(methods)(Parallax);