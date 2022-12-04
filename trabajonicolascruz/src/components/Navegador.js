import React from "react";
import Productos from "./Productos/Productos.js";
import Carrito from "./Carrito/Carrito.js";
import { Route, Routes} from "react-router-dom";
import Comprobantes from "./Comprobantes/Comprobantes.js";

const Navegador = ({
  productItems, 
  cartItems, 
  agregarProducto, 
  quitarProducto,
  limpiarCarrito,
  registrarComprobante 
}) => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={
          <Productos productItems={productItems} agregarProducto={agregarProducto} />}>
        </Route>
        <Route path="/comprobantes" exact element={<Comprobantes />}></Route>
        <Route path="/carrito" exact element={
          <Carrito cartItems={cartItems} agregarProducto={agregarProducto}
          quitarProducto={quitarProducto} limpiarCarrito={limpiarCarrito} 
            registrarComprobante={registrarComprobante}/>
            }>          
        </Route>
      </Routes>
    </div>
  );
};

export default Navegador;
 