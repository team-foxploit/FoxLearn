import React from 'react';
import propTypes from 'prop-types';
import Aux from '../../hoc/Auxiliary';
import './LinkItem.module.css';

const ListItem = (props) => {
    var iconClass = ["fab"];
    iconClass.push(props.icon);
    iconClass = iconClass.join(' ');
    return (
        <Aux>
            <li>
                <a className="grey-text text-lighten-3" href={props.mediaLink}>
                    <span>
                      <i className={iconClass}></i>
                    </span>
                    {props.mediaName}
              </a>
            </li>
        </Aux>
    )
}

ListItem.propTypes = {
    icon: propTypes.string,
    mediaLink: propTypes.string,
    mediaName: propTypes.string
}

export default ListItem;
