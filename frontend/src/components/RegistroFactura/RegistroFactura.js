import React from 'react'
import Prendas from '../Prendas/Prendas'
import Abonos from '../Abonos/Abonos'
import NavFacturas from '../NavFacturas'
import { Form } from 'react-bootstrap'
import { addFacturaConID } from '../../apis/FacturasCRUD'

const RegistroFactura = ({ titulo }) => {
    var num = (Math.floor(Math.random() * 100001));
    //const [state, setstate] = useState(listaPrendas)
    var prendas = [];
    var abonos = [];
    var total_arreglos = 0;
    function save(even) {
        even.preventDefault();
        
        const fecha = new Date();
        const fecIngreso = fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate() + ' ' + fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
        //Calculando el total de arreglos
        for(let i=0; i<prendas.length;i++) {
            console.log("prendas: "+i +prendas[i])
            total_arreglos = parseInt(prendas[i].costo)+total_arreglos;
        }
        console.log("total is: "+total_arreglos);
        const obj = {
            nombre: even.target[0].value,
            numDoc: even.target[1].value,
            telefono: even.target[2].value,
            correo: even.target[3].value,
            fechaIngreso: fecIngreso.toString(),
            estadoFactura: even.target[4].value,
            //totalPagar: even.target[5].value,
            totalPagar: total_arreglos.toString(),
            prendas: prendas,
            abonos: abonos,
            id: num,
        }
        addFacturaConID(obj, (res) => {
            console.log(res);
            if (res == "Factura Agregada") {
                console.log(prendas);
                alert("Factura registrada con exito");
                window.location.href = "http://localhost:3000/facturas";
            } else {
                alert("Algo salió mal, vuelve a intentarlo")
            }
        })
    }
    return (
        <>
            <div className="container ancho">
                <NavFacturas />
                <div className="">
                    <h4>{titulo}</h4>
                    <div className="row">
                        <div className="col-md-4 border-end">
                            <Form onSubmit={save}>
                                <Form.Group controlId="nombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Nombre" />
                                </Form.Group>
                                <Form.Group controlId="numDoc">
                                    <Form.Label>Número Documento</Form.Label>
                                    <Form.Control type="text" placeholder="Número Documento" />
                                </Form.Group>
                                <Form.Group controlId="telefono">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control type="text" placeholder="Teléfono" />
                                </Form.Group>
                                <Form.Group controlId="correo">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control type="text" placeholder="Correo" />
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
                                    <Form.Control type="text" placeholder="Total a Pagar" />
                                </Form.Group>
                                <button type="submit" className="btn color-p color-l">Guardar</button>
                            </Form>
                        </div>
                        <div className="col-md-8">
                            <Prendas listaPrendas={prendas} />
                            <Abonos listaAbonos={abonos}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistroFactura
