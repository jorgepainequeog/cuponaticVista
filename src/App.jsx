import React, {useEffect, useState} from 'react'
import Carrito from './components/Carrito';
import Home from './components/Home'
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CottageIcon from '@mui/icons-material/Cottage';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Productos from './components/Productos'
import {Provider} from 'react-redux'
import generateStore from './redux/store'

function App() {
  const [value, setValue] = React.useState(0);
  const [stores, setStores] = React.useState(0);
  const store = generateStore()

  console.log(store.getState())

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
    <Provider store={store}>
    <div className="container">
      {/* <div><button onClick={grabaData}>grabar la data</button></div>
      <div><button onClick={verData}>ver la data</button></div>
      <div><button onClick={eliminarData}>eliminar la data</button></div> */}
      <Router>
        <div className="row">
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
        </div>
            
            
      <Routes>
        <Route exact path="/productos" element={<Productos/>}/>
        <Route exact path="/carro" element={<Carrito/>}/>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </div>
    </Provider>
  );
}

export default App;
