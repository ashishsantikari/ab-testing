import React, {useEffect, useState} from 'react';
import Button from './Button';

const ButtonExperiment = () => {

    const [variant, setVariant] = useState(0);

    let intervalId = null;

    async function loadVariant() {
        if (window.dataLayer) {
            await window.dataLayer.push({ event: "optimize.activate" });

        }
        intervalId = setInterval(() => {
            if (window.google_optimize !== undefined) {
                let vr = window.google_optimize.get('xvEE-DOaQHCRq55we33RRA');
                console.log(`VR ${vr}`);
                setVariant(vr);
                clearInterval(intervalId);
            }
        }, 100);
    }

    useEffect(() => {
        loadVariant().then(r => r);
    }, []);

    switch (parseInt(variant)) {
        case 0:
            return <Button>Control</Button>;
        case 1:
            return <Button exp>Variant</Button>;
        default:
            return <Button>Control</Button>;
    }
};

export default ButtonExperiment;