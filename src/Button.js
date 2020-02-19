import React from "react";
import './Button.css';
import classnames from 'classnames';

const Button = ({children, exp}) => {

    let btnColor = classnames({
       "button" : !exp,
        "button-blue" : exp,
    });

    return (
        <button className={btnColor}>{children}</button>
    );
}

export default Button;