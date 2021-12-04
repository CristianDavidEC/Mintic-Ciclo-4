import React, { useState, useEffect } from "react";
import Tr from './Tr'
import { getFacturas } from "../../apis/FacturasCRUD";


const Tabla = () => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        console.log("useEffect");
        getFacturas(setResults);
        console.log(results);
    }, []);

    /*getFacturas(res =>{
        console.log(res);
    });*/

    return (
        <>
            <table className="table table-striped">
                <thead className="color-t color-lc">
                    <tr>
                        <th>Id Factura</th>
                        <th>Cliente</th>
                        <th>Estado</th>
                        <th>Fecha Ingreso</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((item) => (
                        console.log(item),
                        <Tr objeto={item} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Tabla