import React from "react";
import "./Productos.css";

const Productos = ({ productItems, agregarProducto}) => {
  return (
    <div className="products">
      {productItems.map((productItem) =>(
        <div className="card">
          <div >
            <img 
            className="product-image"
            src={productItem.imagen}
            alt={productItem.nombre}
            />
          </div>
          <div >
            <h5 className="product.name">{productItem.nombre} - {productItem.marca}</h5>
            <p>{productItem.descripcion}</p>            
          </div>
          <div className="product-price"> ${productItem.precio}</div>
          <div>
            <button 
              className="product-add-button" 
              onClick={() => agregarProducto(productItem)}>
                Añadir al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
    );
};

export default Productos;
