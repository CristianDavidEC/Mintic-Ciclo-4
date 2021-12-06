import React from 'react'

const Tr = (props) => {
    const { objeto } = props;
    return (
        <>
            <tr>
                <td>{objeto.id}</td>
                <td>{objeto.nombre}</td>
                <td>{objeto.estadoFactura}</td>
                <td>{objeto.fechaIngreso}</td>
                <td><a href={"/detalleFactura/" + objeto.id} className="enlaces"><button className="btn color-s color-l"><i className="fa fa-eye"></i></button></a></td>
            </tr>
        </>
    )
}

export default Tr