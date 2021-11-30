import React, { useState } from 'react'
import Modal from '../../Modal/Modal'
import Input from '../../Inputs/Input'

const ItemAbonos = ({ abono, fecha }) => {
    const useModal = (initialValue = false) => {
        const [isOpen, setIsOpen] = useState(initialValue);
        const openModal = () => setIsOpen(true);
        const closeModal = () => setIsOpen(false);
        return [isOpen, openModal, closeModal];
    }
    const [isOpen, openModal, closeModal] = useModal(false);
    const [isOpen1, openModal1, closeModal1] = useModal(false);
    return (
        <>
            <div className="container m-2 border">
                <b>Abono: {abono}</b><br />
                <b>Fecha: {fecha}</b><br />
                <span><i className="m-2 fa fa-edit display-6" onClick={openModal}></i></span>
                <span><i className="m-2 fa fa-trash display-6" onClick={openModal1}></i></span>
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal} title="Editar Abono" boton="Editar" className="modal fade">
                <label>Abono:</label>
                <Input placeholder="Abono" />
            </Modal>
            <Modal isOpen={isOpen1} closeModal={closeModal1} title="Eliminar Abono" boton="Eliminar" className="modal fade">
                <p>¿Está seguro que desea eliminar el abono?</p>
            </Modal>
        </>
    )
}

export default ItemAbonos
