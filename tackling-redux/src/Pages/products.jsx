import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions.jsx';
import '../CSS/products.css'

const Products = ({ products, addToCart }) => {

    const handleClick = (product) => {
        addToCart(product);
    };

    return (
        <>
            {products.map(product => (
                <div key={product.id} className="product-div">
                    <div className='product-inside'>
                        <h1 className='product-heading'>{product.name}</h1>
                        <p className='product-paragraph'>{product.description}</p>
                        <button className='product-button' onClick={() => handleClick(product)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </>
    );
};

const mapStateToProps = state => ({
    products: state.products.products
});

export default connect(mapStateToProps, { addToCart })(Products);
