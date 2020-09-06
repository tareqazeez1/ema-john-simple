import React from 'react';
import './Cart.css';



const Cart = (props) => {

    const cart = props.cart;
    console.log(cart);
   

    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
        debugger;
    }

    let shipping = 0
    if (total > 35) {
        shipping = 0;
    }
    else if (shipping > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    let tax = (total / 10).toFixed(2);
    

    return (
        <div>

            <h3>Ordered Item</h3>
            <b><h5>Items ordered:  {cart.length} </h5></b>
            <h5>Product price: $ {(total).toFixed(2)}</h5>
            <h5>Shipping cost : $ {shipping}</h5>
            <h5>Tax + Vat : $ {tax}</h5>
            <h4>Total price: $ {(total + shipping + Number(tax)).toFixed(2)}</h4>
            <br/>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;