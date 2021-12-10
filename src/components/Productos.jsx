import React, {useState,Fragment,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerProductosAccion} from '../redux/productosDucks'
import {agregarProductoAccion} from '../redux/carritoDucks'
import Producto from './Producto'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Productos = (props) => {
    const dispatch = useDispatch()
    const productos = useSelector(store => store.productos.array)
    const carrito = useSelector(store => store.carrito.valor)
    const [ordenar, setOrdenar] = useState(null);
    const [arregloOrdenado, setArregloOrdenado] = useState([]);

    useEffect(() => {
          dispatch(obtenerProductosAccion());
      },[]); 
      
    const grabaData2 = () =>{
        localStorage.setItem('objeto 1', "objeto de jggigygugiuy")
        alert("Producto Agregado 2")
      }
    const handleChange = (event) => {
        setOrdenar(event.target.value);
        switch(ordenar){
            case 1:
                productos.sort(((a, b) => a.titulo - b.titulo));
                break;
            case 2:
                productos.sort(((a, b) => a.precio - b.precio));
                break;
            case 3:
                break;
            case 4:
                break;
            default :
        }
    };

    const productosFinal = productos.slice(0,4)
    /* console.log(productosOrdenTitulo) */
    
    return (
        <Fragment>
        <div >
        <Stack direction="row" spacing={6}>
            <Item><h1>Ordenar por: </h1></Item>
            <Item><Box sx={{ minWidth: 300 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Opción</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={ordenar}
                    label="ordenar"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Titulo</MenuItem>
                    <MenuItem value={2}>Menor Precio</MenuItem>
                    <MenuItem value={3}>Mayor Precio</MenuItem>
                    <MenuItem value={4}>Fecha Inicio</MenuItem>
                  </Select>
                </FormControl>
            </Box></Item>
        </Stack>
        </div>
        <div>
            <Stack direction="row" spacing={2}>
                 {
                     productosFinal.map(producto =>(
                        <Item key={producto.id}>
                            <Producto 
                            titulo={producto.titulo} 
                            tags={producto.tags}
                            precio={producto.precio}
                            fecha_inicio={producto.fecha_inicio}
                            imagen={producto.imagen}
                            />
                        </Item>   
                     ))
                 }
            </Stack>
        </div>
        <hr />
        <div>
          <h1>Total Agregados:  {carrito} Productos</h1>
          <Button 
              align="center" 
              variant="contained"
              href="/carro"
              >PAGAR
              </Button>
          {/* <button onClick={()=>dispatch(obtenerProductosAccion())}>ver productos</button> */}
        </div>
        </Fragment>
    )
}
export default Productos
