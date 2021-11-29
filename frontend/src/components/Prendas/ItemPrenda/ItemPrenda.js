import React, {useState} from 'react'
import Modal from '../../Modal/Modal'
import Input from '../../Inputs/Input'

const ItemPrenda = ({ color, marca, tipo, tipoArreglo, costo }) => {
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
                <b>Color: {color}</b><br />
                <b>Marca: {marca}</b><br />
                <b>Tipo: {tipo}</b><br />
                <b>Tipo Arreglo: {tipoArreglo}</b><br />
                <b>Costo: {costo}</b><br />
                <span><i className="m-2 fa fa-edit display-6" onClick={openModal}></i></span>
                <span><i className="m-2 fa fa-trash display-6" onClick={openModal1}></i></span>
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal} title="Editar Prenda" boton="Editar" className="modal fade">
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
            <Modal isOpen={isOpen1} closeModal={closeModal1} title="Eliminar Prenda" boton="Eliminar" className="modal fade">
                <p>¿Está seguro que desea eliminar la prenda?</p>
            </Modal>
        </>
    )
}

export default ItemPrenda
