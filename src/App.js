
import './App.css';
import products from './components/data';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';


function App() {
  const [cartItems,setCartItems] = useState([]);

  const onAdd = (product) =>{
    const newCart = [...cartItems];
    const idx = cartItems.findIndex(x => x.id === product.id)
    if(idx !== -1){
      newCart[idx] = {...newCart[idx],qty :newCart[idx].qty + 1}
    }else{
      newCart.push({...product,qty:1}) 
    }
    setCartItems(newCart)
  }

  const onRemove = (product) =>{
    const exist = cartItems.find(x => x.id === product.id)
    if(exist.qty===1){
      setCartItems(cartItems.filter(x => x.id !== product.id))
    }else{
      setCartItems(
        cartItems.map( x => x.id === product.id ? {...exist,qty: exist.qty -1} : x)
      )
    }
  }

  
  

  return (
    <div className='App'>
        <Header cartItems={cartItems}/>
     <div className='row'>
        <Main products={products} onAdd={onAdd}/>  
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
     </div>
    </div>
  );
}

export default App;

