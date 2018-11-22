import { GET_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const getProducts = () => dispatch => {
    fetch('http://private-1c19e-reactlesson.apiary-mock.com/products')
    .then(res => res.json())
    .then(products =>
        dispatch({
            type: GET_PRODUCTS,
            payload: products
        })
    );
}

export const addToCart = (product) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: product
    })
}

export const removeFromCart = (product) => dispatch => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: product
    })
}