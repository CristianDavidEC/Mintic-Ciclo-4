import React from 'react'

const NavBar = () => {
    return (
        <>
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 color-p">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none ">
                        <h4 className="color-l"><i className="fas fa-tshirt"></i> Sastreria Tic</h4>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <a href="/" className="nav-link align-middle px-0 color-l">
                                <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline"> <b>Clientes </b></span>
                            </a>
                        </li>
                        <li>
                            <a href="/facturas" className="nav-link px-0 align-middle color-l">
                                <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline"> <b>Facturas</b></span></a>
                        </li>
                        <li>
                            <a href="/login" className="nav-link px-0 align-middle color-l">
                            <i className="fs-4 bi-person-circle"></i><span className="ms-1 d-none d-sm-inline"> <b>Perfil</b></span> </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link px-0 align-middle color-l">
                            <i className="fs-4 bi-x-circle"></i><span className="ms-1 d-none d-sm-inline"> <b>Salir</b></span> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar

