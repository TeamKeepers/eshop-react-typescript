import { AppDispatch } from "../..";
import Axios from "../../../axios";
import { Products } from "../../../interfaces/product";
import { networkError } from "../../error/actions/networkError";
import { STORE_PRODUCTS } from "../types";

export const getProductsType = (data: Products) => ({
    type: STORE_PRODUCTS, 
    payload: data
});

export const getProductsAction = () => async (dispatch: AppDispatch) => {
    try {
        const {data} = await Axios.get("products");
        return dispatch(getProductsType(data));
    } catch(e) {
        // throw new Error("Network Error");
        return dispatch(networkError());
    }
}

