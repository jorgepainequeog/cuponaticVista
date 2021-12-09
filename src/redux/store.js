import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import productosReducer  from './productosDucks'
import carritoReducer from './carritoDucks'

const rootReducer = combineReducers({
    productos: productosReducer,
    carrito: carritoReducer
})

export default function generateStore(){
    const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(thunk)  ))
    return store;
}

