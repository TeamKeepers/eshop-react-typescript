import { ADD_MORE_PRODUCTS, STORE_PRODUCTS } from "./types";
import { AnyAction } from 'redux'

const initialState = {
    products: [],
    nextPage: null,
}

/*eslint no-case-declarations: "error"*/
export const ProductReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) 
    {
        case STORE_PRODUCTS:
            return {
                ...state,
                products: action.payload["hydra:member"],
                nextPage: action.payload["hydra:view"]["hydra:next"].split("/api/")[1]
            }
        case ADD_MORE_PRODUCTS:
            return {
                ...state,
                nextPage: Object.keys(action.payload["hydra:view"]).includes("hydra:next") ? action.payload["hydra:view"]["hydra:next"].split("/api/")[1] : null,
                products: [...state.products].concat(action.payload["hydra:member"])
            }
        default:
            return state;
    }
}