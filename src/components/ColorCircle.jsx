//cambiar el color hezadesimal a un color


const ColorCircle = ({color="fffffff"}) => {
    if(!color){
        return <div >No tiene Color</div>
    }
  
    return (
    <div>
        <div
            style={{
                backgroundColor: color,
                width: "30px",
                height: "30px",
                borderRadius: "50px"
                
            }}
        >

        </div>
    </div>
  )

}

export default ColorCircle