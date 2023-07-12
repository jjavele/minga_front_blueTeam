import { configureStore } from '@reduxjs/toolkit'
import inputReducer from './reducers/inputReducer'
export const store = configureStore ({
reducer: {
    input: inputReducer
}
})
