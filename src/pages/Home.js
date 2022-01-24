import React from 'react'
import Products from '../components/Products'
import Slide from '../components/Slide'
import Cart from './Cart'

const Home = ({cartItems,handleAddCard,setCart}) => {
    return (
        <>
            <Slide />
            <Products cartItems={cartItems}  handleAddCard={handleAddCard} setCart={setCart}/>            
        </>
    )
}

export default Home
