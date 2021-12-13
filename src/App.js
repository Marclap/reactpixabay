import React, { Component } from 'react'
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'

class App extends Component {
    state = {
        termino: '',
        imagenes: [],
        pagina: '',
    }
    scroll = () => {
        const elemento = document.querySelector('.jumbotron')
        elemento.scrollIntoView('smooth', 'start')
    }
    paginaSiguiente = () => {
        let pagina = this.state.pagina
        pagina++
        this.setState({ pagina }, () => {
            this.consultarApi()
            this.scroll()
        })
    }
    paginaAnterior = () => {
        let pagina = this.state.pagina
        if (pagina === 1) return null
        pagina--
        this.setState({ pagina }, () => {
            this.consultarApi()
            this.scroll()
        })
    }
    consultarApi = () => {
        const termnino = this.state.termino
        const pagina = this.state.pagina
        const url = `https://pixabay.com/api/?key=16227518-483070a4acc9f7535bbf270ec&q=${termnino}&per_page=60&page=${pagina}`
        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((resultado) => this.setState({ imagenes: resultado.hits }))
    }
    datosBusqueda = (termino) => {
        this.setState({ termino: termino, pagina: 1 }, () => {
            this.consultarApi()
        })
    }
    render() {
        return (
            <>
                <div className="bg-slate-800 min-h-screen">
                    <div className="container mx-auto bg-slate-800">
                        <div className="py-8 px-4 mb-8 bg-slate-900 rounded jumbotron">
                            <p className="text-lg font-light text-center">
                                Buscador de imágenes
                            </p>
                            <Buscador datosBusqueda={this.datosBusqueda} />
                        </div>
                        <div className="flex flex-wrap justify-center">
                            <Resultado
                                imagenes={this.state.imagenes}
                                paginaSiguiente={this.paginaSiguiente}
                                paginaAnterior={this.paginaAnterior}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default App
