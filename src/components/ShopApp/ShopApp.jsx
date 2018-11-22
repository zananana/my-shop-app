import React from 'react';
import ProductList from '../ProductList/ProductList';
import UserCart from '../UserCart/UserCart';

const ShopApp = () => {
    return (
        <div className="container">
            <ProductList/>
            <UserCart/>
        </div>
     );
}

export default ShopApp;