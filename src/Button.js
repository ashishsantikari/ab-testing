import React from "react";
import './Button.css';
import classnames from 'classnames';

const Button = ({children, exp}) => {

    let btnColor = classnames({
        "button" : exp === 0,
        "button-blue" : exp === 1,
        "button-red": exp === 2
    });

    return (
        <button className={btnColor}>{children}</button>
    );
}

export default Button;