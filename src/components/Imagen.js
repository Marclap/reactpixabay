const Imagen = (props) => {
    const { largeImageURL, likes, previewURL, tags, views } = props.imagen
    return (
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 pr-4 pl-4 mb-4">
            <div className="relative flex flex-col text-white min-w-0 rounded break-words border bg-slate-600 border-gray-600">
                <img
                    src={previewURL}
                    alt={tags}
                    className="w-full rounded rounded-t"
                />
                <div className="flex-auto p-6">
                    <p className="mb-0">{likes} me gusta</p>
                    <p className="mb-0">{views} vistas</p>
                    <a
                        href={largeImageURL}
                        target="_blank"
                        className="align-middle text-center select-none border font-normal py-2 px-4 rounded text-base leading-normal no-underline text-orange-100 bg-orange-500 hover:bg-orange-400 block w-full"
                    >
                        Ver imagen
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Imagen
