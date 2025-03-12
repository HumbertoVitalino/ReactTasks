import React from 'react';
import style from './button.module.scss';

function Button({button}: {button: string}) {
    return (
        <button className={style.button}>
            {button}
        </button>
    )
}

export default Button;