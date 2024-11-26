//traer los datos del API

import axios from "axios";

const API_URL = "https://673ba8fb96b8dcd5f3f71273.mockapi.io";

// Function to fetch all the products
const getProductos = async () => {
    //promesas
    try {
        const respuesta = await axios.get(`${API_URL}/Productos`);

        if (respuesta.status = 200) {
            return respuesta.data;
        }
        throw new Error('Error al obtener los productos'); //igual al else
    }catch (error) {
        throw error;
    }

}

export {getProductos}; //{getProductos, newProductos, updateProducts}