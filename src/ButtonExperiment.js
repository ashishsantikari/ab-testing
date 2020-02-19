import React, {useEffect, useState} from 'react';
import Button from './Button';

const ButtonExperiment = () => {

    const [variant, setVariant] = useState(0);

    let intervalId = null;

    async function loadVariant() {
        if (window.dataLayer) {
            await window.dataLayer.push({ event: "optimize.activate" });
            console.log("VARIANT", variant);
        }
        intervalId = setInterval(() => {
            if (window.google_optimize !== undefined) {
                const variant = window.google_optimize.get('xvEE-DOaQHCRq55we33RRA');
                setVariant(variant);
                clearInterval(intervalId);
            }
        }, 100);
    }

    useEffect(() => {
        loadVariant().then(r => r);
    }, []);

    switch (variant) {
        case 0:
            return <Button>Get iPhone for 100́ Euros</Button>;
        case 1:
            return <Button exp>Get iPhone for free!!! Click now!!!</Button>;
        default:
            return <Button exp>Get iPhone for free!!! Click now!!!</Button>;
    }
};

export default ButtonExperiment;