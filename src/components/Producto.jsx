import React, {useState, useEffect, useContext} from 'react'
import {AppContext} from '../App'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const Producto = (props) => {
    const {listaProductos,grabaData,verData,eliminarData} = useContext(AppContext)
    const [productos, setProductos] = useState([])
    const [valor, setValor] = useState("")
    var numero = props.ite;

    const grabaData2 = () =>{
        localStorage.setItem('objeto 1', "objeto de jggigygugiuy")
        alert("Producto Agregado 2")
      }

    return (
        <div>
            {/* {listaProductos.map(item => <li key={item.id}>{item.titulo}</li>)} */}
            {listaProductos ? 

            <Card sx={{ maxWidth: 200 }}>
            <CardMedia
                component="img"
                height="100"
                /* image="https://cuponassets.cuponatic-latam.com/backendMx/uploads/imagenes_descuentos/33423/7c7ee5a72d8cd8c7c7431bebdbfe77f6c3e12cb0.full.jpg" */
                image={listaProductos[numero].imagen}
                alt="green iguana"
            />
            <CardContent>
                {/* {listaProductos.map(item => <li key={item.id}>{item.titulo}</li>)} */}
                {/* {listaProductos.map(item => <div>{item.titulo}</div>)} */}
                
                <div><p>Titulo: {listaProductos[numero].titulo}</p></div>
                <div><p>Vendidos: {listaProductos[numero].vendidos}</p></div>
                <div><p>Precio: {listaProductos[numero].precio}</p></div>
                <div><p>tags: {listaProductos[numero].tags}</p></div>
                    
            </CardContent>

            <CardActions>
              <Button onClick={grabaData2} size="small">Agregar al Carro</Button>
            </CardActions>
        </Card> : null}
        </div>
    )
}
export default Producto
