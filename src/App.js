import { Component } from 'react';
import Header from './components/Header';
// import Products from './components/Products';
// import Message from './components/Message';
// import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

class App extends Component {
  render(){
    return (
        <div>
            <Header/>
            <main id="mainContainer">
                <div className="container">
                    <ProductsContainer/>
                    <MessageContainer/>
                    <CartContainer/>
                </div>
            </main>
            <Footer/>

        </div>
    );
  }
}

export default App;
