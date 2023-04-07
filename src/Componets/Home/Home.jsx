import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';
const Home = () => {
    const tshirts = useLoaderData()
    // console.log(tshirts);

    const [cart, setCart] = useState([])


    const handleAddToCart = tshirt => {

        const exist = cart.find(pd => pd._id === tshirt._id)
        if (exist) {
            toast('You have all Ready added this t-shirt');
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart);

        }

    }

    const handleDeleteBtn = (id) => {
        const remaining = cart.filter(pd => pd._id !== id)
        setCart(remaining)
    }

    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleDeleteBtn={handleDeleteBtn}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;