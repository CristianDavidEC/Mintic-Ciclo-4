import React, { useState, useEffect } from 'react'
import ItemPrenda from './ItemPrenda/ItemPrenda'
import Modal from '../Modal/Modal'
import Input from '../Inputs/Input'

import RegistroFactura from '../RegistroFactura/RegistroFactura';

const Prendas = (props) => {

    //const [prendas, setListaPrendas] = useState([]);


    /*useEffect(() => {
        setListaPrendas(prendas);
    },[prendas]);*/

    const useModal = (initialValue = false) => {
        const [isOpen, setIsOpen] = useState(initialValue);
        const openModal = () => setIsOpen(true);
        const closeModal = () => setIsOpen(false);
        return [isOpen, openModal, closeModal];
    }
    const [isOpen, openModal, closeModal] = useModal(false);

    function save(even) {
        even.preventDefault();
        var lista = props.estado;
        const obj = {
            color: even.target[0].value,
            marca: even.target[1].value,
            tipoPrenda: even.target[2].value,
            tipoArreglo: even.target[3].value,
            costo: even.target[4].value,
        }
        lista.push(obj);
        props.setEstado(lista);
        closeModal();
        document.querySelector('#formPrenda').reset();
        openModal();
        
        setTimeout(() => {
            closeModal();
        }, 100);
    }

    return (
        <>
            <div className="container mb-5">
                <h4>Prendas:</h4>
                <div className="row">
                    <div className="col-md-5">
                        {props.estado.map((item, index) => (
                            console.log(item),
                            /*<ItemPrenda color={item.color} marca={item.marca} tipo={item.tipoPrenda} tipoArreglo={item.tipoArreglo} costo={item.costo} key={index}/>*/
                            <ItemPrenda color={item.color} marca={item.marca} tipo={item.tipoPrenda} tipoArreglo={item.tipoArreglo} costo={item.costo}/>
                        ))}
                    </div>
                    <div className="col-md-1 mt-4">
                        <button className="btn" onClick={openModal}>
                            <i className="fa fa-plus-circle display-6"></i>
                        </button>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal} title="Agregar Prenda" className="modal fade">
                <form onSubmit={save} id="formPrenda">
                    <label>Color:</label>
                    <Input placeholder="Color" name="color" />
                    <label>Marca:</label>
                    <Input placeholder="Marca" name="marca" />
                    <label>Tipo Prenda:</label>
                    <Input placeholder="Tipo Prenda" name="tipoPrenda" />
                    <label>Tipo Arreglo:</label>
                    <Input placeholder="Tipo Arreglo" name="tipoArreglo" />
                    <label>Costo:</label>
                    <Input placeholder="Costo" name="costo" />
                    <button type="submit" className="btn color-p color-l mt-3" onClick={closeModal}>Agregar</button>
                </form>
            </Modal>
        </>
    )
}

export default Prendas
