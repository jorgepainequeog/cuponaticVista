//constantes
const dataInicial = {
    valor: 0,
    arreglo:[],
}
//types
const OBTENER_CARRITO_EXITO = 'OBTENER_CARRITO_EXITO'
const AGREGAR_PRODUCTO_EXITO = 'AGREGAR_PRODUCTO_EXITO'

//reducer
export default function carritoReducer(state = dataInicial , action){
    switch(action.type){
        case OBTENER_CARRITO_EXITO:
            return {
                valor: state.valor + action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {...state, arreglo: action.payload}
        default :
            return state
    }
}
//acciones
export const agregarProductoAccion = (carrito) => async (dispatch, getState) => {
    dispatch({ 
        type: OBTENER_CARRITO_EXITO,
        payload: carrito
    })
}

export const agregarProductoCarritoAccion = (imagen) => async (dispatch, getState) => {
    dispatch({ 
        type: AGREGAR_PRODUCTO_EXITO,
        payload: imagen
    })
}