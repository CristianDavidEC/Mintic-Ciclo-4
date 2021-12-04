import React from "react"

const Modal = ({ title, children, isOpen, closeModal }) => {
    const handleClick = (e) => e.stopPropagation();
    return (<>
        <div className={`modales fades ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container card" onClick={handleClick}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                    <button type="button" onClick={closeModal} className="close btn btn-danger" data-dismiss="modal" aria-label="Close">
                        <i className="fa fa-times"></i>
                    </button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    </>
    );
};

export default Modal;
