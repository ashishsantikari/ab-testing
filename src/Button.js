import React, {useEffect} from "react";
import './Button.css';
import classnames from 'classnames';

const Button = ({children, exp}) => {

    let btnColor = classnames({
       "button" : !exp,
        "button-blue" : exp,
    });

    async function loadVariant() {
        if (window.dataLayer) {
            await window.dataLayer.push({ event: "optimize.activate" });
        }
        this.intervalId = setInterval(() => {
            if (window.google_optimize !== undefined) {
                const variant = window.google_optimize.get('xvEE-DOaQHCRq55we33RRA');
                this.setState({ variant });
                clearInterval(this.intervalId);
            }
        }, 100);
    }

    useEffect(() => {
        loadVariant();
    }, []);

    return (
        <button className={btnColor}>{children}</button>
    );
}

export default Button;