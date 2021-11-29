import React, { useState } from 'react'
import ItemAbonos from './ItemAbonos/ItemAbonos'
import Modal from '../Modal/Modal'
import Input from '../Inputs/Input'

const Abonos = () => {
    const useModal = (initialValue = false) => {
        const [isOpen, setIsOpen] = useState(initialValue);
        const openModal = () => setIsOpen(true);
        const closeModal = () => setIsOpen(false);
        return [isOpen, openModal, closeModal];
    }
    const [isOpen, openModal, closeModal] = useModal(false);
    return (
        <>
            <div className="container mb-5">
                <h4>Abonos:</h4>
                <div className="row">
                    <div className="col-md-5">
                        <ItemAbonos abono="10.000" fecha="25/11/2021"/>
                    </div>
                    <div className="col-md-5">
                        <ItemAbonos abono="5.000" fecha="26/11/2021"/>
                    </div>
                    <div className="col-md-1 mt-4">
                        <button className="btn" onClick={openModal}>
                            <i className="fa fa-plus-circle display-6"></i>
                        </button>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal} title="Agregar Abono" className="modal fade">
                <label>Abono:</label>
                <Input placeholder="Abono" />
            </Modal>
        </>
    )
}

export default Abonos