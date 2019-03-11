import React from 'react';
import propTypes from 'prop-types';
import Aux from '../../hoc/Auxiliary';

const CarouselItem = (props) => {
    let titleClasses = ["caption"];
    titleClasses.push(props.titleClass);
    titleClasses = titleClasses.join(' ');
    let subTitleClasses = ["light"];
    subTitleClasses.push(props.subTitleClass);
    subTitleClasses = subTitleClasses.join(' ');
    console.log(titleClasses);
    console.log(subTitleClasses);
    return (
        <Aux>
            <li>
              <img src={props.img} alt={props.altText} />
              <div className={titleClasses}>
                <h2>{props.title}</h2>
                <h5 className={subTitleClasses}>{props.subtitile}</h5>
              </div>
            </li>
        </Aux>
    )
}

CarouselItem.propTypes = {
    img: propTypes.string,
    altText: propTypes.string,
    title: propTypes.string,
    subtitile: propTypes.string,
    titleClass: propTypes.string,
    subTitleClass: propTypes.string
}

export default CarouselItem;
