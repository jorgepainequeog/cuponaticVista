import React, {useEffect, useState, createContext} from 'react'
import ListadoProductos from './components/ListadoProductos';
import Carrito from './components/Carrito';
import Home from './components/Home'
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CottageIcon from '@mui/icons-material/Cottage';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

export const AppContext = createContext(null);

function App() {
  const [value, setValue] = React.useState(0);
  const [stores, setStores] = React.useState(0);
  const [listaProductos, setListaProductos] = useState([])

  useEffect(()=>{
    obtenerData()
  },[])

  const obtenerData = async ()=>{
    const data = await fetch('http://127.0.0.1:8000/api/list/')
    const productos = await data.json()
    setListaProductos(productos)
  }
  const grabaData = () =>{
    localStorage.setItem('objeto 1', "objeto de jggigygugiuy")
    alert("Producto Agregado")
  }
  const verData = () =>{
    var data = localStorage.getItem("objeto 1")
    alert(data)
  }
  const eliminarData = () =>{
    localStorage.removeItem("objeto 1")
  }

  return (
    <AppContext.Provider value={{listaProductos, setListaProductos, grabaData,verData,eliminarData}}>
    <div className="container">
      {/* <div><button onClick={grabaData}>grabar la data</button></div>
      <div><button onClick={verData}>ver la data</button></div>
      <div><button onClick={eliminarData}>eliminar la data</button></div> */}
      <div>
        <ul>
         {/*  {listaProductos.map(item=>(
            <li key={item.id}>
              {item.titulo} - {item.precio}
            </li>
          ))
          } */}
          
        </ul>
      </div>
      <Router>
            <Box sx={{ width: 500 }}>
              <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
              setValue(newValue);
              }}
              >
              <BottomNavigationAction 
                label="Inicio" 
                icon={<CottageIcon />} 
                component={Link} to='/'
              />
              <BottomNavigationAction 
                label="Listado Productos" 
                icon={<Inventory2Icon />} 
                component={Link} to='/productos'
              />
              <BottomNavigationAction 
                label="Resumen de compras" 
                icon={<LocalGroceryStoreIcon />} 
                component={Link} to='/carro'
              />
              </BottomNavigation>
            </Box>
      <Routes>
        <Route exact path="/productos" element={<ListadoProductos/>}/>
        <Route exact path="/carro" element={<Carrito/>}/>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </div>
    </AppContext.Provider>
  );
}

export default App;
