import { createReducer } from "@reduxjs/toolkit"
import commentsActions from "../actions/comments"                   //importo las acciones

const { datos_comments, datos_prev, datos_next } = commentsActions                              //desestructuro la accion para poder utilizarla

const initialState = {                                              //defino estado inicial
   comments: "",
   prev: "",
   next: "",
  
}

const commentsReducer = createReducer(initialState, 
    (builder) => builder
    .addCase(datos_comments,                                           //.addCase define la logica necesaria para modificar los estados
        (state, action)=>{
            console.log(action.payload)
            let newState = {
                ...state,
                comments: action.payload
                
            }
    return newState
    
})
.addCase(datos_prev,                                           //.addCase define la logica necesaria para modificar los estados
        (state, action)=>{
            console.log(action.payload)
            let newState = {
                ...state,
                prev: action.payload
                
            }
    return newState
    
})
.addCase(datos_next,                                           //.addCase define la logica necesaria para modificar los estados
        (state, action)=>{
            console.log(action.payload)
            let newState = {
                ...state,
                prev: action.payload
                
            }
    return newState
    
})
)

export default commentsReducer