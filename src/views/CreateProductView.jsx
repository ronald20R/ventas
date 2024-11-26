//añadir producto
import React from 'react'

const CreateProductView = () => {
    return (
        <div className='container pt-4'>
            <h1><b>Agregar Nuevo Producto</b></h1>


            <div className='mt-5 mb-3'>
                <h3>Agregar Nombre</h3>
                {/*Nombre del Producto*/}
                <label htmlFor="nombre">Nombre: </label>
                <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    placeholder='Ej. xyz Producto'
                />

            </div>

            <div className='mb-3'>
                <h3>Agregar Descripcion</h3>
                {/*Nombre del Producto*/}
                <label htmlFor="descripcion">Descripcion: </label>
                <textarea
                    type="text"
                    id="descripcion"
                    className="form-control"
                    placeholder='Ej. producto de para XD'
                />

            </div>

            <div className='mb-3'>
                <h3>Agregar Marca</h3>
                {/*Nombre de la Marca*/}
                <label htmlFor="marca">Marca: </label>
                <input
                    type="text"
                    id="marca"
                    className="form-control"
                    placeholder='Ej. Sansung Motorola'
                />

            </div>

            <div className='mb-3'>
                <h3>Agregar Precio</h3>
                {/*Nombre de la Marca*/}
                <label htmlFor="precio">Precio: </label>
                <input
                    type="text"
                    id="precio"
                    className="form-control"
                    placeholder='Ej. 19.50'
                />

            </div>

            <div className='mb-3'>
                <h3>Agregar Color</h3>
                {/*Nombre del color*/}
                <label htmlFor="color">Color del producto: </label>
                <input
                    type="color"
                    id="color"
                    className="form-control"
                />

            </div>

        </div>
    )
}

export default CreateProductView