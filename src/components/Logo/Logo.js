import React from 'react'
import projectLogo from '../../assets/images/foxploit-logo.png';
import style from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={style.Logo} >
            <img src={projectLogo} alt="foxploit-logo" />
        </div>
    )
}

export default Logo;
