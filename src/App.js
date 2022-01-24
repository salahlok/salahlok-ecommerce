import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';
import {cartItems} from './data'
import {useState} from 'react'
import SingleProducts from './pages/SingleProducts';
import Products from './components/Products';
import Payment from './components/Payment';



function App() {

  const [cart,setCart]=useState([])

  const handleAddCard = (product)=>{
    const ProductExist = cart.find((item) => item.id === product.id)
    if(ProductExist){
      setCart(cart.map((item)=> item.id === product.id ?
      {...ProductExist,quantity:ProductExist.quantity +1} : item))
      
    }else{
      setCart([...cart,{...product, quantity:1}])
      
    }
  }

  const handleRemoveCard = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id)
    if(ProductExist.quantity === 1){
      setCart(cart.filter((item)=> item.id === 1))

    }else{
      setCart(
        cart.map((item)=> item.id === product.id ? {...ProductExist,quantity:ProductExist.quantity - 1} : item)
      )
    }
    
  }

  const handleCardClearance = () =>{
    setCart([])
  }

  
  return (

    <Router>
      <Navbar cart={cart} />
        <Switch>
          <Route exact path="/" >
            <Home cartItems={cartItems} cart={cart} handleAddCard={handleAddCard} setCart={setCart}/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/products">
            <Products cartItems={cartItems} cart={cart} handleAddCard={handleAddCard} setCart={setCart}/>
          </Route>
          <Route path="/cart">
            <Cart cart={cart} handleAddCard={handleAddCard} handleRemoveCard={handleRemoveCard} handleCardClearance={handleCardClearance} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/product/:id">
            <SingleProducts cartItems={cartItems}/>
          </Route>
          <Route path="/payment">
            <Payment/>
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
