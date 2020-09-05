import React from 'react';

const ReviewItem = (props) => {

    const {name, quantity, img, key} = props.product;
    const reviewItemStyle={
        borderBottom: '2px solid lightgray',
        marginBottom: '5px',
        marginLeft: '200px',
        paddingBottom: '5px'

    };
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <img src={img} alt=""/>
            <p>Quantity: {quantity}</p>
            <button onClick={() => props.removeProduct(key)} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;