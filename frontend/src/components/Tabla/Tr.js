import React from 'react'

const Tr = ({id, cliente, estado, fecha}) => {
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{cliente}</td>
                <td>{estado}</td>
                <td>{fecha}</td>
                <td><a href="/detalleFactura" class="enlaces"><button class="btn color-p color-l"><i class="fa fa-eye"></i></button></a></td>
            </tr>
        </>
    )
}

export default Tr