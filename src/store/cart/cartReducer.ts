import { ADD_TO_CART, DELETE_PRODUCT, CHANGE_PRODUCT_QUANTITY, EMPTY_CART } from "./types";
import { AnyAction } from 'redux';
import { Cart } from "../../interfaces/cart";

const initialState = {
    cart_list: {},
    total: 0,
    pin: 0,
}

/*eslint no-case-declarations: "error"*/
export const CartReducer = (state = initialState, action: AnyAction) => {
    const newState: Cart = {...state};
    switch (action.type) 
    {
        case ADD_TO_CART:
            if(newState.cart_list[action.payload.product.id])
            {
                newState.cart_list[action.payload.product.id].quantity += action.payload.quantity
                
            } else {
                newState.cart_list[action.payload.product.id] = { 
                    item: action.payload.product, 
                    quantity: action.payload.quantity
                }
            }
            newState.total += action.payload.quantity*action.payload.product.price;
            newState.pin += action.payload.quantity

            return newState;
        case DELETE_PRODUCT:
            newState.total -= newState.cart_list[action.payload].quantity! * newState.cart_list[action.payload].item!.price;
            newState.pin -= newState.cart_list[action.payload].quantity!
            delete newState.cart_list[action.payload];
            return newState;
        case CHANGE_PRODUCT_QUANTITY: {
            newState.cart_list[action.payload.id].quantity = action.payload.quantity;

            // Need to recalculate everything because the total rely on adding the price/quantity at each step
            let newTotal = 0;
            let newPin = 0
            for(const product in newState.cart_list)
            {
                newTotal += newState.cart_list[product].item!.price * newState.cart_list[product].quantity!
                newPin += newState.cart_list[product].quantity!
            }
            
            return {
                ...newState,
                total: newTotal,
                pin: newPin
            };
        }
        case EMPTY_CART:
            return {
                ...state,
                cart_list: {},
                total: 0,
                pin: 0
            }
        default:
            return state;
    }
}