import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {Link} from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
        >
            <BottomNavigationAction 
                label="Listado Productos" 
                icon={<Inventory2Icon />} 
                component={Link} to='/'
            />
            <BottomNavigationAction 
                label="Carrito" 
                icon={<LocalGroceryStoreIcon />} 
            />
        </BottomNavigation>
        <h4>
            You have selected {value} position button
        </h4>
    </Box>
  );
}
