import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import LinkItem from './LinkItem';

const MediaLinks = (props) => {
    return (
        <Aux>
            <h5 className="white-text">Keep in touch!</h5>
            <ul>
              <LinkItem icon="fa-facebook-f" mediaLink="https://www.facebook.com/foxploit" mediaName="Facebook"/>
              <LinkItem icon="fa-twitter-square" mediaLink="https://twitter.com/@foxploit" mediaName="Twitter"/>
              <LinkItem icon="fa-linkedin-in" mediaLink="https://www.linkedin.com/in/team-foxploit/" mediaName="LinkedIn"/>
            </ul>
        </Aux>
    )
}

export default MediaLinks;
