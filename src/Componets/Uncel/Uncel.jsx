import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncel = () => {
    const [money,setMoney]=useContext(MoneyContext)
    return (
        <div>
            <h1>Uncel</h1>
            <p><small>grandpa money: {money}</small></p>
            <button onClick={()=>setMoney(money+1000)}>Send 1000tk</button>
            <section className='flex'>
                <Cousin>nabil</Cousin>
                <Cousin>nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncel;