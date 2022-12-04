import { useEffect, useState } from 'react';
import axios from 'axios';

const Comprobantes = () => {

  const url = 'http://localhost:3002/comprobantes';
  const [comprobantes, setComprobantes] = useState([]);

  const listar = () => {
    axios.get(url)
        .then(response => {
          setComprobantes(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
  }

  useEffect(() => {
    listar();
  }, [])

  return (
    <div className="container">
            <p className="fs-5">Lista de Comprobantes Total: {comprobantes.length}</p>
            <div>
                <table className='table table-hover text-center'>
                    <thead>
                        <tr>                            
                            <th>Items:</th>
                            <th>Precio Total Comprobante:</th>                            
                        </tr>
                    </thead>
                    <tbody style={{verticalAlign: 'middle'}}>
                        {
                            comprobantes.map((comprobante) => (
                                <tr key={comprobante.id} style={{paddingTop: 'inherit'}}>
                                    <td >{
                                    comprobante.items.map((item)=>(
                                      <tr key={item.id} style={{paddingTop: 'inherit'}}>
                                        <td> | nombre: {item.nombre}</td>
                                        <td> | precio unitario: S/{item.precio}</td>
                                        <td> | cantidad: {item.cantidad}</td>
                                        <td> | <img src={item.imagen} width={50}></img>  </td>
                                      </tr>
                                    ))
                                    }</td> 
                                    <td>S/{comprobante.precioTotal}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

          </div>        
        </div>
  )
};

export default Comprobantes;