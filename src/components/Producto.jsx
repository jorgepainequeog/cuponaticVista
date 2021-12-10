import React, {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useDispatch, useSelector} from 'react-redux'
import {agregarProductoAccion} from '../redux/carritoDucks'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Producto = ({titulo,tags,precio,fecha_inicio,imagen}) => {
  const dispatch = useDispatch()
  const productos = useSelector(store => store.productos.array)
  const productosOrdenTitulo = productos.sort()
  const carrito = useSelector(store => store.carrito.valor)

 /*  const grabaData = () =>{
    localStorage.setItem(JSON.stringify({imagen: "John"}))
    let arreglo = JSON.parse( localStorage);
    alert( arreglo); // John
  } */
  const grabaData = (imagen,titulo,precio) =>{
    localStorage.setItem('objeto 1', JSON.stringify({imagen: imagen, titulo: titulo, precio: precio}))
  }
  const eliminarData = () =>{
    localStorage.removeItem("objeto 1")
  }
  
    return (
      <div>
    <Card sx={{ maxWidth: 330 }}>
      <CardMedia
        component="img"
        height="140"
        image={imagen}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>titulo:{titulo}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>tags:{tags}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>precio:{precio}</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>fecha inicio: {fecha_inicio}</Item>
            </Grid>
        </Grid>
        </Typography>
      </CardContent>
      <CardActions>
        <Typography>
            <Button 
              align="center" 
              variant="contained"
              onClick={()=>{
                dispatch(agregarProductoAccion(1));
                grabaData(imagen,titulo,precio);
              }}
            >Agregar
            </Button>
    
        </Typography>
      </CardActions>
    </Card>
    </div>
    )
}

export default Producto
