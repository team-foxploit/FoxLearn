import React from 'react';
import Aux from '../../hoc/Auxiliary';
import { Link } from 'react-router-dom';

const CardButtons = (props) => {
    const subjects = ["easy", "medium", "hard"];
    return (
        <Aux>
            {subjects.map((subject, index) => {
                var link = ["/subject/"];
                var classes = ["waves-effect waves-light btn-large buttonClass"];
                var a_id = ["button_"];
                link.push(subject);
                a_id.push(subject);
                switch(subject){
                    case "easy":
                        classes.push("blue");
                        break;
                    case "medium":
                        classes.push("yellow");
                        break;
                    case "hard":
                        classes.push("red");
                        break;
                    default:
                        break;
                }
                link = link.join('');
                a_id = a_id.join('');
                classes = classes.join(' ');
                return (
                    <Link
                        className={classes}
                        id={a_id}
                        href={link}
                        key={index}
                    >
                        {subject}
                    </Link>
                )
            })}
        </Aux>
    )
}

export default CardButtons;
