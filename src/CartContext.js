import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider= () => {

   //cart state 
 const [cart, setCart]=useState([]);
  //add to Cart
  const addToCart = (product, id) => {
    const newItem = {...product, amount:1}
    //check if item is already in the cart
    const cartItem = cart.find((item)=>{
        return  item._id === id;
    });

    if(cartItem){
        const newCart = [...cart].map((item) =>{
            if (item.id === id){
                const newCart ={...item, amount: cartItem.amount }+ 1};
            } else {
                return item;
            }
    });
    }

    setCart(newCart);
} else {
    setCart([...cart, newItem]);
}

console.log(cart);
     
    
    console.log(cartItem);
  }
    return(
    <CartContext.Provider  
    value={addToCart}>
        {children}
    </CartContext.Provider> 
    );
};

export default CartProvider;