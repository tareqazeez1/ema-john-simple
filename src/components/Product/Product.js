import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    console.log(props);

    return (
        <div className="product">
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div className="product-name">
                <h4> {props.product.name} </h4>
                <br />
                <p><p>by : {props.product.seller} </p></p>
                <p><b>${props.product.price}</b></p>
                <p><small>only {props.product.stock} left in stock</small></p>
                <button className="main-button" onClick={ () => props.handleAddProduct(props.product.name)}> 
                <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>


        </div>
    );
};

export default Product;