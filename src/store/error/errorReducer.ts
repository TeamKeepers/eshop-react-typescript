import { AnyAction } from 'redux'
import { NETWORK_ERRORS } from "./types";

const initialState = {
    network_error: false
}

/*eslint no-case-declarations: "error"*/
export const errorReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) 
    {
        case NETWORK_ERRORS:
            return {...state, network_error: true};
        default:
            return state;
    }
}