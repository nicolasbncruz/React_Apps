import { useEffect, useState } from "react";

const Reloj = () => {

    const [fecha, setFecha] = useState(new Date());

    const actualizaFecha = () => {
        setFecha(fecha => new Date())
    }

    useEffect(() => {
        const idfecha = setInterval(() => {
            actualizaFecha()
        }, 1000);

        return () => clearInterval(idfecha);
    })

    return (
        <div className="container">            
            <p className="lead fs-2 bg-primary text-white p-2 m-2 shadow" style={{textAlign: 'center', width: '100%'}}>{fecha.toLocaleString()}</p>
        </div>
    )
}
export default Reloj;