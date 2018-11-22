import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {removeFromCart} from '../../actions/productActions';

class UserCart extends Component {

    removeFromCart(cartItem) {
        this.props.removeFromCart(cartItem);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.cart){
            localStorage.setItem('cartItems', JSON.stringify(nextProps.cart));
        }
    }

    sumItems() {
        let total = 0;
        this.props.cart.map( c => ( total += c.price));
        return total;
    }

    render() {
        const { cart } = this.props;

        return (
                <section className="user-cart"><h4>Twój koszyk</h4>
                    <ul className="user-cart--list">
                    {cart.map( (cartItem, index) => (
                    <li key={cartItem.cart_id}>
                        <button onClick={()=>this.removeFromCart(cartItem)}>x</button>
                        {index} - {cartItem.name} - {cartItem.price} zł
                    </li>))}
                    </ul>
                    <section className="total-price">
                        {cart.length > 0 ?
                            `Podsumowanie: ${this.sumItems()} zł`
                            :
                            `Twój koszyk jest pusty.`
                        }
                    </section>
                </section>
         );
    }
}

UserCart.propTypes = {
    removeFromCart: PropTypes.func.isRequired,
    cart: PropTypes.array
}

const mapStateToProps = state => ({
    cart: state.products.cart
})

export default connect(mapStateToProps, { removeFromCart })(UserCart);
