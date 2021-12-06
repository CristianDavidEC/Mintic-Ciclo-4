import React, { useState } from 'react'
import Modal from '../../Modal/Modal'
import Input from '../../Inputs/Input'

const ItemAbonos = ({ estado, setEstado, abono, fecha }) => {
    const useModal = (initialValue = false) => {
        const [isOpen, setIsOpen] = useState(initialValue);
        const openModal = () => setIsOpen(true);
        const closeModal = () => setIsOpen(false);
        return [isOpen, openModal, closeModal];
    }
    const [isOpen, openModal, closeModal] = useModal(false);
    const [isOpen1, openModal1, closeModal1] = useModal(false);

    const fec = new Date();
    const fecAbono = fec.getFullYear() + '-' + (fec.getMonth() + 1) + '-' + fec.getDate() + ' ' + fec.getHours() + ':' + fec.getMinutes() + ':' + fec.getSeconds();

    function save(even) {
        even.preventDefault();
        var lista = estado;
        console.log(lista);
        var item = {
            valor: even.target[0].value,
            fecha: fecAbono.toString()
        }

        lista.splice(lista.indexOf(lista), 1);
        lista.unshift(item);
        setEstado(lista);
        document.querySelector('#editAbono').reset();
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
        document.querySelector('#deleteAbono').reset();
        openModal1();
        setTimeout(() => {
            closeModal1();
        }, 100);
    }

    return (
        <>
            <div className="container m-2 border">
                <b>Abono: {abono}</b><br />
                <b>Fecha: {fecha}</b><br />
                <span><i className="m-2 fa fa-edit display-6" onClick={openModal}></i></span>
                <span><i className="m-2 fa fa-trash display-6" onClick={openModal1}></i></span>
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal} title="Editar Abono" boton="Editar" className="modal fade">
                <form onSubmit={save} id="editAbono">
                    <label>Abono:</label>
                    <Input placeholder="Abono" valor={abono} />
                    <button type="submit" className="btn color-p color-l mt-3" onClick={closeModal}>Editar</button>
                </form>
            </Modal>
            <Modal isOpen={isOpen1} closeModal={closeModal1} title="Eliminar Abono" boton="Eliminar" className="modal fade">
                <form onSubmit={borrar} id="deleteAbono">
                    <p>¿Está seguro que desea eliminar el abono?</p>
                    <button type="submit" className="btn color-p color-l mt-3" onClick={closeModal1}>Eliminar</button>
                </form>
            </Modal>
        </>
    )
}

export default ItemAbonos
