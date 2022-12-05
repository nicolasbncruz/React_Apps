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
            <div >
                <table className='table table-striped table-hover text-center' style={{borderLeftWidth: 'medium', borderRightWidth: 'medium'}}>
                    <thead >
                        <tr>
                            <th>ID Comprobante</th>
                            <th>Items</th>
                            <th>Precio Total Comprobante</th>
                        </tr>
                    </thead>
                    <tbody style={{verticalAlign: 'middle'}}>
                        {
                            comprobantes.map((comprobante) => (
                                <tr key={comprobante.id} style={{paddingTop: 'inherit',borderLeftWidth: 'medium', borderRightWidth: 'medium'}}>
                                    <td>{comprobante.id}</td>
                                    <td style={{textAlign: 'left',borderLeftWidth: 'medium', borderRightWidth: 'medium'}}>{
                                    comprobante.items.map((item)=>(
                                      <tr key={item.id} style={{paddingTop: 'inherit'}}>
                                        <td> <b> Nombre:</b> {item.nombre}</td>
                                        <td> <img src={item.imagen} width={50}/></td>
                                        <td> <b> | Precio Unitario:</b> S/{item.precio}</td>
                                        <td> <b> | Cantidad:</b> {item.cantidad}.00</td>
                                        <td> <b> | Sub-total:</b> S/{item.cantidad*item.precio}</td>                                        
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