import React from 'react';
import Myself from '../MySelf/Myself';
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother';

const Father = ({ring}) => {
    return (
        <div>
            <h1>father</h1>

            <section className='flex'>
                <Myself ring={ring}></Myself>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;