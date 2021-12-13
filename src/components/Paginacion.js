const Paginacion = (props) => {
    return (
        <div className="py-3">
            <button
                onClick={props.paginaAnterior}
                type="button"
                className="inline-block align-middle text-center select-none border font-normal py-2 px-4 rounded text-base leading-normal no-underline text-red-100 bg-red-700 hover:bg-red-600 mr-1"
            >
                &larr; Anterior
            </button>
            <button
                onClick={props.paginaSiguiente}
                type="button"
                className="inline-block align-middle text-center select-none border font-normal py-2 px-4 rounded text-base leading-normal no-underline text-red-100 bg-red-700 hover:bg-red-600"
            >
                Siguiente &rarr;
            </button>
        </div>
    )
}

export default Paginacion
