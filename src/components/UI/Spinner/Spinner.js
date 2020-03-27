import React from 'react';
import style from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={style.spinWrapper}>
        <div className={style.spinner}>
        </div>
    </div>
  )
}

export default Spinner
