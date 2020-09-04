import React from 'react';
import './Cart.css';


const Cart = (props) => {

    const cart = props.cart;

    const total = cart.reduce((total, prd) => total + prd.price, 0)

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
            <b><h5>Items ordered: {cart.length} </h5></b>
            <p>Product price: {(total).toFixed(2)}</p>
            <p>Shipping cost : {shipping}</p>
            <p>Tax + Vat : {tax}</p>
            <p>Total price: {(total + shipping + Number(tax)).toFixed(2)}</p>

        </div>
    );
};

export default Cart;