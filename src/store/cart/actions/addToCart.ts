import { AppDispatch } from "../..";
import { ProductDetail } from "../../../interfaces/product";
import { networkError } from "../../error/actions/networkError";
import { ADD_TO_CART } from "../types";

type ProductToCart = {
    product: ProductDetail,
    quantity: number
}

export const addToCartType = (data: ProductToCart) => ({
    type: ADD_TO_CART, 
    payload: data
});

export const addToCartAction = (item: ProductToCart) => async (dispatch: AppDispatch) => {
    try {
        return dispatch(addToCartType(item));
    } catch(e) {
        // throw new Error("Network Error");
        return dispatch(networkError());
    }
}