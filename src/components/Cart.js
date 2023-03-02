import React, { useState } from "react";
import Properties from "./Properties";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (property) => {
        setCartItems([...cartItems,property]);
    };

    const removeFromCart = (property) => {
        const newCartItems = cartItems.filter((item) => item.id !== property.id);
        setCartItems(newCartItems);
    };

    const checkout = () => {
        //
        //
        setCartItems([]);
    };
    return(
        <div>
            <h1>Cart</h1>
            <button>Checkout</button>
            {cartItems.length === 0 ? (
                <p>Your cart id empty!</p>
            ):(
                <div>
                    <ul>
                        {cartItems.map((item) => {
                            <li key={item.id}>
                                {item.title} - ${item.price}
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </li>
                        })}
                    </ul>
                    <p>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
                    <button onClick={checkout}>Checkout</button>
                    </div>
            )
        }
            
            
        </div>
    )
}

export default Cart