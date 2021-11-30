import React from 'react'
import BotonInicioSeccion from "../components/BotonInicioSeccion"

const Login = () => {
    return (
        <>
            <div className="Container ancho fondo">
                <div className="row">
                    <div className="">
                        <div className="login">
                            <div className="card-body">
                                <h3 className="card-title text-center">Iniciar sesión</h3>
                                <div className="form-group">
                                    <BotonInicioSeccion />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
