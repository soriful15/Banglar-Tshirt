import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h1>aunty</h1>

            <section className='flex'>
            <Cousin>abir</Cousin>
            <Cousin hasFriend={true} ring={ring}>nibir</Cousin>

            </section>
        </div>
    );
};

export default Aunty;