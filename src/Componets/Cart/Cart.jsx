import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleDeleteBtn }) => {
    // console.log(cart)
    let message;
    if (cart.length === 0) {
        message = <p>please add some products</p>
    }
    else {
        message = <div>

            <h3> Boroloxxx</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }

    return (
        <div>
            <h1 className={cart.length ===1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h1>
            <p className={`border bold ${cart.length ===3 ? 'yellow' : 'orange'}`}>something</p>

            {
                cart.length > 2 ?
                    <span className='purple'>Aroo Kinno</span>
                    :
                    <span>Fokira</span>
            }

            {message}

            {
                cart.map((tshirt, index) => <p key={index}


                >{tshirt.name} <button onClick={() => handleDeleteBtn(tshirt._id)}>X</button></p>)
            }
            {
                cart.length ===2 && <p>Double bonanza !!!</p>
            }

            {
                cart.length ===3 || <h3>tinta to hoilo na</h3>  
            }

        </div>
    );
};

export default Cart;


/* 
conditional rendering
1.use if else to set a variable that .will contain an element ,components,if-else,div etc..

2.ternary : condition ? 'for true' : 'false
3. Logical  && : (if the condition is true then next thing will be displayed)
4.Logical || (if the condition is false then next thing will be displayed)
*/


/* 
conditional css class
*/