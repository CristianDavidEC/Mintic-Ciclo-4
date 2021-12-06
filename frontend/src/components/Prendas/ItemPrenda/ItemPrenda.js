import React, { useState } from 'react'
import Modal from '../../Modal/Modal'
import Input from '../../Inputs/Input'

const ItemPrenda = ({ estado, setEstado, color, marca, tipo, tipoArreglo, costo }) => {
    const useModal = (initialValue = false) => {
        const [isOpen, setIsOpen] = useState(initialValue);
        const openModal = () => setIsOpen(true);
        const closeModal = () => setIsOpen(false);
        return [isOpen, openModal, closeModal];
    }
    const [isOpen, openModal, closeModal] = useModal(false);
    const [isOpen1, openModal1, closeModal1] = useModal(false);

    function save(even) {
        even.preventDefault();
        var lista = estado;
        console.log(lista);
        var item = {
            color: even.target[0].value,
            marca: even.target[1].value,
            tipoPrenda: even.target[2].value,
            tipoArreglo: even.target[3].value,
            costo: even.target[4].value,
        }

        lista.splice(lista.indexOf(lista), 1);
        lista.unshift(item);
        setEstado(lista);
        document.querySelector('#editPrenda').reset();
        openModal();
        setTimeout(() => {
            closeModal();
        }, 100);
    }

    function borrar(even) {
        even.preventDefault();
        var lista = estado;
        lista.splice(lista.indexOf(lista), 1);
        console.log(lista);

        setEstado(lista);
        document.querySelector('#deletePrenda').reset();
        openModal1();
        setTimeout(() => {
            closeModal1();
            openModal1();
            setTimeout(() => {
                closeModal1();
            }, 100);
        }, 100);
    }

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
                <form onSubmit={save} id="editPrenda">
                    <label>Color:</label>
                    <Input placeholder="Color" name="color" valor={color} />
                    <label>Marca:</label>
                    <Input placeholder="Marca" name="marca" valor={marca} />
                    <label>Tipo:</label>
                    <Input placeholder="Tipo" name="tipo" valor={tipo} />
                    <label>Tipo Arreglo:</label>
                    <Input placeholder="Tipo Arreglo" name="tipoArreglo" valor={tipoArreglo} />
                    <label>Costo:</label>
                    <Input placeholder="Costo" name="costo" valor={costo} />
                    <button type="submit" className="btn color-p color-l mt-3" onClick={closeModal}>Editar</button>
                </form>
            </Modal>
            <Modal isOpen={isOpen1} closeModal={closeModal1} title="Eliminar Prenda" boton="Eliminar" className="modal fade">
                <form onSubmit={borrar} id="deletePrenda">
                    <p>¿Está seguro que desea eliminar la prenda?</p>
                    <button type="submit" className="btn color-p color-l mt-3" onClick={closeModal1}>Eliminar</button>
                </form>
            </Modal>
        </>
    )
}

export default ItemPrenda
