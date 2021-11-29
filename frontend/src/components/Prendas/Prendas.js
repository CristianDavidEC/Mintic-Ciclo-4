import React, {useState} from 'react'
import ItemPrenda from './ItemPrenda/ItemPrenda'
import Modal from '../Modal/Modal'
import Input from '../Inputs/Input'

const Prendas = () => {
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
                <h4>Prendas:</h4>
                <div className="row">
                    <div className="col-md-5">
                        <ItemPrenda color="Negro" marca="Nike" tipo="Pantalon" tipoArreglo="Costura" costo="15.000"/>
                    </div>
                    <div className="col-md-5">
                        <ItemPrenda color="Negro" marca="Nike" tipo="Pantalon" tipoArreglo="Costura" costo="15.000"/>
                    </div>
                    <div className="col-md-1 mt-4">
                        <button className="btn" onClick={openModal}>
                            <i className="fa fa-plus-circle display-6"></i>
                        </button>
                    </div>
                </div>
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal} title="Agregar Prenda"  boton="Agregar" className="modal fade">
                <label>Color:</label>
                <Input placeholder="Color" />
                <label>Marca:</label>
                <Input placeholder="Marca" />
                <label>Tipo:</label>
                <Input placeholder="Tipo" />
                <label>Tipo Arreglo:</label>
                <Input placeholder="Tipo Arreglo" />
                <label>Costo:</label>
                <Input placeholder="Costo" />
            </Modal>
        </>
    )
}

export default Prendas
