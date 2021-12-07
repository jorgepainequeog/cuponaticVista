import React,{useState, useEffect, useContext} from 'react'
import {AppContext} from '../App'
import Producto from './Producto';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const ListadoProductos = () => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    const {listaProductos,verData} = useContext(AppContext)

    return (
        <div className="container">
            <h3>Productos de API laravel</h3>
            <h2>Total agregados al carro:</h2>
            <hr/>
                {/* {listaProductos.map(item => <li key={item.id}>{item.titulo}</li>)} */}

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                      <Producto ite={1}/>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                    <Producto ite={2}/>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                    <Producto ite={3}/>
                    </Item>
                </Grid>
                </Grid>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                      <Producto ite={15}/>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                    <Producto ite={10}/>
                    </Item>
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <Item>
                    <Producto ite={16}/>
                    </Item>
                </Grid>
                </Grid>
            </Box>

          </div>
    )
}

export default ListadoProductos
