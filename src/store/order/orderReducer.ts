import { AnyAction } from 'redux'
import { STORE_NEW_ORDER } from "./types";

const initialState = {
    orders: [],
}

/*eslint no-case-declarations: "error"*/
export const orderReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) 
    {
        case STORE_NEW_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        default:
            return state;
    }
}