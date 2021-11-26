import React from 'react'

const NavBar = () => {
    return (
        <>
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 color-p">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
                    <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none ">
                        <h4 class="color-l"><i class="fas fa-tshirt"></i> Sastreria Tic</h4>
                    </a>
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li class="nav-item">
                            <a href="/" class="nav-link align-middle px-0 color-l">
                                <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline"> <b>Clientes </b></span>
                            </a>
                        </li>
                        <li>
                            <a href="/facturas" class="nav-link px-0 align-middle color-l">
                                <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline"> <b>Facturas</b></span></a>
                        </li>
                        <li>
                            <a href="/" class="nav-link px-0 align-middle color-l">
                            <i class="fs-4 bi-person-circle"></i><span class="ms-1 d-none d-sm-inline"> <b>Perfil</b></span> </a>
                        </li>
                        <li>
                            <a href="/" class="nav-link px-0 align-middle color-l">
                            <i class="fs-4 bi-x-circle"></i><span class="ms-1 d-none d-sm-inline"> <b>Salir</b></span> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar

