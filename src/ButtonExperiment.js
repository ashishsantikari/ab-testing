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
                let vr = window.google_optimize.get('7WEUM8vJQZ6XdRgXW7nNGA');
                console.log(`VR ${vr}`);
                setVariant(parseInt(vr));
                clearInterval(intervalId);
            }
        }, 100);
    }

    useEffect(() => {
        loadVariant().then(r => r);
    }, []);

    switch (parseInt(variant)) {
        case 0:
            return <Button exp={0}>Control</Button>;
        case 1:
            return <Button exp={1}>Variant</Button>;
        case 2:
            return <Button exp={2}>Free iPhone 11 pro? Click Here</Button>;
        default:
            return <Button exp={0}>Control</Button>;
    }
};

export default ButtonExperiment;