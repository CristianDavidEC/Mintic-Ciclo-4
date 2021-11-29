import React from 'react'

const NavFacturas = () => {
    return (
        <>
            <nav className="navbar-expand-lg color-p p-2 my-3">
                <div className="d-flex justify-content-between">
                    <a className="nav-link color-l" href="/registrarFactura"><b><i className="bi bi-file-earmark-plus"></i> Registrar Factura</b></a>
                    <a className="nav-link color-l" href="todasFacturas"><b><i className="bi bi-file-earmark-text"></i> Ver Todas Las Facturas</b></a>
                    <a className="nav-link color-l"><b><i className="bi bi-file-check"></i> Facturas Pendientes</b></a>

                </div>
            </nav>

        </>
    )
}

export default NavFacturas

