import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const angti=useContext(RingContext)
    return (
        <div>
            <h1>special</h1>
            <p><small>{ring}</small></p>
            <p>{angti}</p>
        </div>
    );
};

export default Special;