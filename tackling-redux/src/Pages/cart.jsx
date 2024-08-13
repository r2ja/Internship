import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>Cart</h2>
            <p>Number of items: {cart.items.length}</p>
        </div>
    );
};

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(Cart);
