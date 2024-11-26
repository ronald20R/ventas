//lista de produtos
import { useState, useEffect } from 'react'
import { getProductos } from '../services/productServices'
import ProductsTable from '../components/ProductsTable';

const ListView = () => {
    const [productos, setProductos] = useState([]);


    useEffect(() => {
        try {
            const listaProductos = async () => { //no olvidar el async await
                const productos = await getProductos();
                console.log(productos);
                setProductos(productos);
            }
            listaProductos();

        } catch (error) {
            console.error(error);
        }
    },[]); //por que devuleve el arreglo vacio?


    return (
        <div className='container py-3'>
            <h2 className='mb-3'>Lista de productos </h2>
            <ProductsTable productos={productos} />
        </div>
    )
}

export default ListView