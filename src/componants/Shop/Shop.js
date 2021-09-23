import React from 'react';


const Shop = (props) => {

    const { name, stock, img, price, star } = props.product;
    return (
        <div>
            <h1>Name : {name}</h1>
            <p><small>Stock Item : {stock}</small></p>
            <p><small>Price: {price}</small></p>
            <p><small>Rating : {star}</small></p>
            <img src={img} alt="" />
            <button onClick={() => props.handleAddToCart(props.product)} >Add To Cart</button>

        </div>
    );
};

export default Shop;