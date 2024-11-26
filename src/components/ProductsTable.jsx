//productos en una tabla
import ColorCircle from "./ColorCircle"

const ProductsTable = ({ productos }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Marca</th>
            <th>Color</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productos.map(({ nombre, descripcion, marca, color, precio, id }) => (
            <tr key={id}>
              <td>{nombre}</td>
              <td>{descripcion}</td>
              <td>{marca}</td>
              <td>
                <ColorCircle color={color} />
              </td>
              <td>S/.{precio}</td>
              <td className="d-flex gap-2">
                <button className="btn btn-primary btn-sm" > {/*libreria de react bootstrap*/}
                  <i class="fa-solid fa-pen-to-square"></i> {/*libreria de font awesome icons*/}
                </button>
                <button className="btn btn-danger btn-sm" > {/*libreria de react bootstrap*/}
                  <i class="fa-solid fa-trash-can"></i> {/*libreria de font awesome icons*/}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ProductsTable 
//react router ....  npm i react-router-dom