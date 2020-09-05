import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props);
    const {img, name, seller, price, stock, key} = props.product;
   

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"/Product/"+key}>{name}</Link> </h4>
                <br />
                <p><p>by : {seller} </p></p>
                <p><b>${price}</b></p>
                <p><small>only {stock} left in stock</small></p>
                {props.showAddCart === true && <button className="main-button" 
                onClick={ () => props.handleAddProduct(props.product)}> 
                <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>


        </div>
    );
};

export default Product;