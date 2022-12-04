import React, {useState} from 'react';
import data from './components/Data';

import Navegador from "./components/Navegador";
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import Banner from './components/Banner/Banner';
import Reloj from './components/Reloj';

const App = () => {
  const {productItems} = data;
  const [cartItems, setCartItems] = useState([]);
  const [comprobantes,setComprobantes]=useState([]);
  const url = "http://localhost:3002/comprobantes";

  const agregarProducto = (product) =>{
    const ProductExist = cartItems.find((item)=> item.id === product.id);
    if(ProductExist){
      setCartItems(
        cartItems.map((item) => item.id === product.id ?
        {...ProductExist, cantidad: ProductExist.cantidad + 1} : item)
      );
    } else {
      setCartItems([...cartItems, {...product,  cantidad: 1}]);
    }
  };

  const quitarProducto = (product) => {
    const ProductExist = cartItems.find((item)=> item.id === product.id);
    if(ProductExist.cantidad === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    }else{
      setCartItems(
        cartItems.map((item) => item.id === product.id ? 
        {...ProductExist, cantidad: ProductExist.cantidad - 1} : item)
      );
    }
  };

  const registrarComprobante = (cartItems,totalPrice) => {
    console.log(cartItems);
    let comprobante={      
      items: cartItems,
      precioTotal:totalPrice
    }
    console.log(comprobante);
    try {
      let response=axios.post(url,comprobante);      
      setComprobantes([response.data,...comprobantes]);
      setCartItems([]);
  } catch (error) {
      console.log('error al registrar', error);
  }    
  }

  const limpiarCarrito = () =>{
    setCartItems([]);
  }

  return (
    <div>
      <Router>
        <Banner cartItems={cartItems} />
        <Reloj />
        <Navegador productItems={productItems} cartItems={cartItems} agregarProducto={agregarProducto} 
        quitarProducto={quitarProducto} limpiarCarrito={limpiarCarrito} registrarComprobante={registrarComprobante}/>        
      </Router>
    </div>
  );
}

export default App;