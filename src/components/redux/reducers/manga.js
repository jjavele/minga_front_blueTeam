import { createReducer } from "@reduxjs/toolkit"
import inputActions from "../actions/inputActions"
const { capture_text } = inputActions

const initialState = { 
    text: '', 
    checks: [], 
    select: '' 
}

const inputReducer = createReducer(initialState, (builder) => builder.addCase(capture_text, (state, action)=>{
    console.log(state);
    console.log(action);
    let newState = {
        ...state,
        text: action.payload.text
    }
    return newState
}))

export default inputReducer