import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h2>friend </h2>
            {/* <p>{ring}</p> */}
            {ring && <p><small>ring: Diamond</small></p> }
        </div>
    );
};

export default Friend;