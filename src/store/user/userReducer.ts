import { AnyAction } from 'redux'
import { STORE_USER_INFO } from "./types";

const initialState = {
    customer: null,
}

/*eslint no-case-declarations: "error"*/
export const UserReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) 
    {
        case STORE_USER_INFO:
            return {
                ...state,
                customer: action.payload
            }
        default:
            return state;
    }
}