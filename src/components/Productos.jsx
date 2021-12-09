import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerProductosAccion} from '../redux/productosDucks'
import {agregarProductoAccion} from '../redux/carritoDucks'

const Productos = (props) => {
    const dispatch = useDispatch()
    const productos = useSelector(store => store.productos.array)
    const carrito = useSelector(store => store.carrito.valor)

    const grabaData2 = () =>{
        localStorage.setItem('objeto 1', "objeto de jggigygugiuy")
        alert("Producto Agregado 2")
      }

    return (
        <div className="container">
            <div className="row">
                <h1>Lista de Productos</h1>
                <button onClick={()=>dispatch(obtenerProductosAccion())}>Obtener Productos</button>
            </div>
        <div className="row"> 
            <div className="col-12">
                <div className="col-4">
                    <p>iamgen</p>
                </div>
                <div className="col-8">
                <ul>
                    {/* {
                        productos.map(item=>(
                            <li key={item.id}>{item.titulo}</li>
                        ))
                    } */}
                </ul>
              </div>
            </div>
      </div>
      <div className="row">
          <h1>has comprado:  {carrito}... Productos</h1>
          <button onClick={()=>dispatch(agregarProductoAccion(1))}>Comprar</button>
      </div>
    </div>
        
    )
}
export default Productos
