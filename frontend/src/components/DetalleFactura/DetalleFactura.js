import React, { useState, useEffect } from 'react'
import Prendas from '../Prendas/Prendas'
import Abonos from '../Abonos/Abonos'
import { Form } from 'react-bootstrap'
import NavFacturas from '../NavFacturas'
import { getOneFactura } from "../../apis/FacturasCRUD"
import { useParams } from "react-router";

const DetalleFactura = ({ titulo }) => {
    const [results, setResults] = useState([]);
    const [prendas, setPrendas] = useState([]);
    const [abonos, setAbonos] = useState([]);

    const idFactura = useParams().id;

    useEffect(() => {
        getOneFactura(idFactura, res => {
            setResults(res);
            setPrendas(res.prendas);
            setAbonos(res.abonos);
        });
    }, []);
    return (
        <>
            <div className="container ancho">
                <NavFacturas />
                <div className="">
                    <h4>{titulo}</h4>
                    <div className="row">
                        <div className="col-md-4 border-end">
                            <Form>
                                <Form.Group controlId="nombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Nombre" defaultValue={results.nombre} />
                                </Form.Group>
                                <Form.Group controlId="numDoc">
                                    <Form.Label>Número Documento</Form.Label>
                                    <Form.Control type="text" placeholder="Número Documento" defaultValue={results.numDoc} />
                                </Form.Group>
                                <Form.Group controlId="telefono">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control type="text" placeholder="Teléfono" defaultValue={results.telefono} />
                                </Form.Group>
                                <Form.Group controlId="correo">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control type="text" placeholder="Correo" defaultValue={results.correo} />
                                </Form.Group>
                                <Form.Group className="" controlId="estadoFactura">
                                    <Form.Label>Estado Factura</Form.Label>
                                    <Form.Select>
                                        <option>Seleccione</option>
                                        <option value="Pendiente">Pendiente</option>
                                        <option value="En espera">En espera</option>
                                        <option value="Cancelado">Cancelado</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="totalPagar">
                                    <Form.Label>Total a Pagar</Form.Label>
                                    <Form.Control type="text" placeholder="Total a Pagar" id="totalPagar" value={results.totalPagar} readOnly />
                                </Form.Group>
                                <button type="submit" className="btn color-p color-l">Guardar</button>
                            </Form>
                        </div>
                        <div className="col-md-8">
                            <Prendas estado={prendas} setEstado={setPrendas}  />
                            <Abonos estado={abonos} setEstado={setAbonos} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetalleFactura
