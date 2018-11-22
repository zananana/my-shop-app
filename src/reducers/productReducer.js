import { GET_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = {
    products: [],
    cart: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case ADD_TO_CART:
            let newItem = Object.assign({}, action.payload);
            const milliseconds = new Date().getTime();
            newItem.cart_id = milliseconds;
            return {
                ...state,
                cart: [...state.cart, newItem]
            };
        case REMOVE_FROM_CART:
            const cart = state.cart.filter(p => p.cart_id !== action.payload.cart_id);
            return {
                ...state,
                cart: cart
            };
        default:
            return state;
    }
}