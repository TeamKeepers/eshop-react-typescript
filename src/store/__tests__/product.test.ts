import { ProductReducer } from "../product/productReducer";

describe("Product Reducer", () => {
    const initialState = {
        products: [],
        nextPage: null
    }

    it("If no action.type triggered", () => {
        const reducer = ProductReducer(undefined, {});
        expect(reducer).toEqual(initialState);
    })

    // TO DO GUILLAUME
    // CONTINUE ON OTHER PROJECT FEATURE BEFORE DEADLINE

})