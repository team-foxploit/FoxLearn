import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  var classes = ["card-image lighten-2 centText"];
  classes.push(props.color);
  classes = classes.join(' ');
  return (
    <div className="card">
      <div className={classes}>
        <i className="material-icons large md-148">{props.icon}</i>
        <div className="card-content white">
          <h4 className={props.style.title}>{props.title}</h4>
          <p>
            {props.description}
          </p>
          <div className="card-action">
            {props.button ?
              <Link to={props.link} className="waves-effect waves-light btn green darken-1">
                {props.button}
              </Link> : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
