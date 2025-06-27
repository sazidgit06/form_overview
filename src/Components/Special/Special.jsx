import React, { useContext } from 'react';
import { levelContext } from '../grandpa/Grandpa';

const Special = () => {
    const gift = useContext(levelContext);
    return (
        <div>
            <h6>special</h6> 
            <p>has: {gift}</p>
        </div>
    );
};

export default Special;