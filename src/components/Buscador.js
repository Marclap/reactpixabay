import React, { Component } from 'react'

class Buscador extends Component {
    busquedaRef = React.createRef()
    obtenerDatos = (e) => {
        e.preventDefault()
        let termino = this.busquedaRef.current.value
        this.props.datosBusqueda(termino)
    }
    render() {
        return (
            <>
                <form onSubmit={this.obtenerDatos}>
                    <div className="flex flex-wrap">
                        <div className="mb-4 md:w-2/3 pr-4 pl-4">
                            <input
                                ref={this.busquedaRef}
                                type="text"
                                className="block appearance-none w-full mb-1  leading-normal bg-white text-gray-900 border border-gray-700 rounded py-2 px-4 text-lg"
                                placeholder="Busca tu imagen"
                            />
                        </div>
                        <div className="mb-4 md:w-1/3 pr-4 pl-4">
                            <input
                                type="submit"
                                className="align-middle text-center select-none border border-red-600 font-normal rounded no-underline py-2 px-4 text-xl leading-tight text-red-100 bg-red-700 hover:bg-red-600 block w-full"
                                value="Buscar"
                            />
                        </div>
                    </div>
                </form>
            </>
        )
    }
}
export default Buscador
