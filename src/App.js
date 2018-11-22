import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ShopApp from './components/ShopApp/ShopApp';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <NavBar/>
                <ShopApp/>
                <Footer/>
            </div>
        </Provider>
    );
  }
}

export default App;
