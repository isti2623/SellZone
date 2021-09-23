import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("./products.JSON")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div>
            <Cart cart={cart}></Cart>

            {
                products.map(product => <Shop
                    key={product.key}
                    product={product}
                    handleAddToCart={handleAddToCart}
                >

                </Shop>)
            }

        </div>
    );
};

export default Product;