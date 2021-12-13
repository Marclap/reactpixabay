import React, { Component } from 'react'
import Imagen from './Imagen'
import Paginacion from './Paginacion'

class Resultado extends Component {
    mostrarImagenes = () => {
        const imagenes = this.props.imagenes
        if (imagenes.length === 0) return null
        return (
            <>
                <div className="p-5 flex flex-wrap">
                    {imagenes.map((imagen) => (
                        <Imagen key={imagen.id} imagen={imagen} />
                    ))}
                </div>
                <Paginacion
                    paginaSiguiente={this.props.paginaSiguiente}
                    paginaAnterior={this.props.paginaAnterior}
                />
            </>
        )
    }
    render() {
        return <>{this.mostrarImagenes()}</>
    }
}
export default Resultado
