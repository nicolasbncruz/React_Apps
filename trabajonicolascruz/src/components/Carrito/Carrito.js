import './Carrito.css';

const Carrito = ({cartItems, agregarProducto, quitarProducto, limpiarCarrito, registrarComprobante }) => {

  const totalPrice = cartItems.reduce((precio, item) => 
    precio + item.cantidad * item.precio, 0) 

  return (
    <div className='cart-items'>
      <h2 className='cart-items-header'>Mi Carrito</h2>
      <div className='clear-cart' style={{justifyContent: 'center'}}>
        {cartItems.length >=1 && (
          <button className='clear-cart-button' onClick={limpiarCarrito}>
            <i className="fas fa-recycle" />
             Limpiar Carrito
            </button>
        )}
      </div>

      {cartItems.length === 0 && (
        <div className='cart-items-empty'>No se han agregado productos.</div>
      )}
      <div >
        {cartItems.map((item) => (
          <div key={item.id} className='cart-items-list'>
            <img 
              className='cart-items-image' 
              src={item.imagen} 
              alt={item.nombre}
              />
            <div className='cart-items-name'>{item.nombre} - {item.marca}</div>
            <div className='cart-items-function'>
              <button className='cart-items-add' onClick={() => agregarProducto(item)}>Agregar</button>
              <button className='cart-items-remove' onClick={() => quitarProducto(item)}>Quitar</button>
            </div>            
            <div className='cart-items-price'>
              {item.cantidad} * S/{item.precio}
            </div>
          </div>
        ))}
      </div>
      <div className='cart-items-total-price-name'>
        Precio Total 
        <div className='cart-items-total-price'>S/
          {totalPrice}
        </div>
      </div>
      <div className='pagar-cart' style={{textAlign: 'center'}}>
        <button className='pagar-cart-button' onClick={() => registrarComprobante(cartItems,totalPrice)}>Pagar</button>
      </div>
    </div>
  )
};

export default Carrito; 