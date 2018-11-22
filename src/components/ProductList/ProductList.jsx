import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProducts, addToCart} from '../../actions/productActions';

class ProductList extends Component {
    state = {
        displayedProducts: []
    }

    componentDidMount() {
        this.props.getProducts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.products){
            this.setState({ displayedProducts: nextProps.products });
        }
    }

    addToCart(product) {
        this.props.addToCart(product);
    }

    searchHandler = (event) => {
        let searchQuery = event.target.value.toLowerCase();
        const displayedProducts = this.props.products.filter((el) => {
              let textToSearch = el.name.toLowerCase() + " " + el.description.toLowerCase();
              return textToSearch.indexOf(searchQuery) !== -1;
        });
        this.setState({ displayedProducts });
    }

    render() {
        return (
            <section className="product-list">

                <div className="search"><input className="search-input" placeholder="Szukaj..." onChange={this.searchHandler}/></div>

                {this.state.displayedProducts.map( product => (
                    <div className="product-box" key={product.id}>
                        <div><img className="product-box--image" alt="" src={product.photo}/></div>
                        <div><h2>{product.name}</h2>
                            <pre>Cena: {product.price}zł</pre>
                            <p>{product.description}</p>
                            <button disabled={!product.in_stock} onClick={()=>this.addToCart(product)}>Dodaj do koszyka</button>
                        </div>
                    </div>
                ))}
            </section>
         );
    }
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    products: state.products.products
})

export default connect(mapStateToProps, { getProducts, addToCart })(ProductList);