//constantes
const dataInicial = {
    valor: 0
}
//types
const OBTENER_CARRITO_EXITO = 'OBTENER_CARRITO_EXITO'
//reducer
export default function carritoReducer(state = dataInicial , action){
    switch(action.type){
        case OBTENER_CARRITO_EXITO:
            return {
                valor: state.valor + action.payload
            }
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