
import { createAction } from "@reduxjs/toolkit"

const capture_text = createAction(
    'capture_text' ,
        (obj) => {
            return {
                payload: {
                    text: obj.text,
                }
            }
        }
)

const inputActions = { capture_text }
export default inputActions
