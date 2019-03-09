import React from 'react';
import Aux from '../../hoc/Auxiliary';
import CardButtons from './CardButtons';

const CardReveal = (props) => {
    var cardColorClass = ["card-image amber lighten-2 centText"];
    var buttonColorClass = ["waves-effect waves-light btn darken-1 activator"];
    buttonColorClass.push(props.color);
    cardColorClass.push(props.color);
    buttonColorClass = buttonColorClass.join(' ');
    cardColorClass = cardColorClass.join(' ');

    return (
        <Aux>
            <div className="card">
                <div className={cardColorClass}>
                  <i className="material-icons large md-148">{props.icon}</i>
                  <div className="card-content white">
                    <h4 className={props.style.title}>{props.title}</h4>
                    <p className="activator">
                      {props.description}
                    </p>
                    <div className="card-action">
                      <button className={buttonColorClass}>
                        {props.button}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-reveal blue-grey centText">
                  <span className="card-title text-darken-4 white-text">
                    Select a Level<i className="material-icons right">close</i>
                  </span>
                  <div className="row">
                    <div className="card-content">
                      <div className="col s6 m6 offset-s3 offset-m3">
                        <CardButtons/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </Aux>
    )
}

export default CardReveal;
