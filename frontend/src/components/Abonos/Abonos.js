import React, { useState } from 'react'
import ItemAbonos from './ItemAbonos/ItemAbonos'
import Modal from '../Modal/Modal'
import Input from '../Inputs/Input'

const Abonos = (props) => {
    
    const useModal = (initialValue = false) => {
        const [isOpen, setIsOpen] = useState(initialValue);
        const openModal = () => setIsOpen(true);
        const closeModal = () => setIsOpen(false);
        return [isOpen, openModal, closeModal];
    }
    const [isOpen, openModal, closeModal] = useModal(false);

    const fecha = new Date();
    const fecAbono = fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate() + ' ' + fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();

    function save(even) {
        even.preventDefault();
        var lista = props.estado;
        const obj = {
            valor: even.target[0].value,
            fecha: fecAbono.toString()
        }
        lista.push(obj);
        props.setEstado(lista);
        document.querySelector('#formAbono').reset();
        openModal();
        setTimeout(() => {
            closeModal();
        }, 100);
    }

    return (
        <>
            <div className="container mb-5">
                <h4>Abonos:</h4>
                <div className="row">
                        {props.estado.map((item, index) => (
                            <div className="col-md-5">
                            <ItemAbonos abono={item.valor} fecha={item.fecha} key={index} />
                            </div>
                        ))}
                    <div className="col-md-1 mt-4">
                        <button className="btn" onClick={openModal}>
                            <i className="fa fa-plus-circle display-6"></i>
                        </button>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal} title="Agregar Abono" className="modal fade">
                <form onSubmit={save} id="formAbono">
                    <label>Abono:</label>
                    <Input placeholder="Abono" name="abono" />
                    <button type="submit" className="btn color-p color-l mt-3" onClick={closeModal}>Agregar</button>
                </form>
            </Modal>
        </>
    )
}

export default Abonos