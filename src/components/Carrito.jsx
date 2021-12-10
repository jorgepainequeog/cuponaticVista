import React,{useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(imagen,titulo,precio) {
    return { imagen,titulo,precio };
  }

const rows = [
    createData(localStorage.getItem("objeto 1")),
  ];
  
const Carrito = () => {

    useEffect(() => {
        verData();
    },[]); 

    const verData = () =>{
        /* var data = localStorage.getItem("objeto 1") */
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            /* alert(`${key}: ${localStorage.getItem(key)}`); */
          }
      }
    
    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Totales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.imagen}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.imagen}</TableCell>
              <TableCell align="right">{row.titulo}</TableCell>
              <TableCell align="right">{row.precio}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default Carrito
