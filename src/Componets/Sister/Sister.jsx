import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money]=useContext(MoneyContext)
    return (
        <div>
            <h1>sister</h1>
            <p>money {money}</p>
        </div>
    );
};

export default Sister;