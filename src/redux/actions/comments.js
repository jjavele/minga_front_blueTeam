import { createAction } from "@reduxjs/toolkit"

const datos_comments = createAction(
    'datos_comments',                                         //nombre de la accion
    (comments) => {                                           //funcion que va a enviar datos al reductor 
        console.log(comments)                                 //el objeto debe tener todas las propiedades a guardarse en el estado global
            return {
                payload: comments

            }
        }
    )

const datos_prev = createAction(
    'datos_prev',                                         //nombre de la accion
    (prev) => {                                           //funcion que va a enviar datos al reductor 
        //console.log(prev)                                 //el objeto debe tener todas las propiedades a guardarse en el estado global
            return {
                 payload: prev
                    
            }
        }
    )
const datos_next = createAction(
    'datos_next',                                         //nombre de la accion
    (next) => {                                           //funcion que va a enviar datos al reductor 
        //console.log(next)                                 //el objeto debe tener todas las propiedades a guardarse en el estado global
            return {
                payload: next
                        
            }
        }
    )
// el objetivo de la accion es enviar informacion al reductor. 
// AQUI se realiza TODA la logica necesaria para modificar/reducir los estados globales.
const commentsActions = { datos_comments, datos_prev, datos_next }
export default commentsActions