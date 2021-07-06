import { CartReducer } from '../cart/cartReducer';
import { ADD_TO_CART, CHANGE_PRODUCT_QUANTITY, DELETE_PRODUCT, EMPTY_CART } from '../cart/types';

describe("Cart Reducer", () => {
    const initialState = {
        cart_list: {},
        total: 0,
        pin: 0,
    }

    const midStateCondition = {
        cart_list: {
            1: {
                item: {
                    "@id": "/api/products/1",
                    "@type": "Product",
                    "id": 1,
                    "name": "Natus nesciunt repellendus minima perspiciatis praesentium sapiente cum.",
                    "price": 89455,
                    "image": "http://loremflickr.com/640/480/city?random=0&lock=0",
                    "isAvailable": true
                },
                quantity: 2
            }
        },
        total: 178910,
        pin: 2,
    }

    const advancedStateCondition = {
        cart_list: {
            1: {
                item: {
                    "@id": "/api/products/1",
                    "@type": "Product",
                    "id": 1,
                    "name": "Natus nesciunt repellendus minima perspiciatis praesentium sapiente cum.",
                    "price": 89455,
                    "image": "http://loremflickr.com/640/480/city?random=0&lock=0",
                    "isAvailable": true
                },
                quantity: 2
            },
            3: {
                item: {
                    "@id": "/api/products/3",
                    "@type": "Product",
                    "id": 3,
                    "name": "Iste voluptates quia quia officiis cumque eos ut.",
                    "price": 87975,
                    "image": "http://loremflickr.com/640/480/city?random=2&lock=2",
                    "isAvailable": true
                },
                quantity: 10
            }
        },
        total: 1058660,
        pin: 12,
    }

    it("If no action.type triggered", () => {
        const reducer = CartReducer(undefined, {});
        expect(reducer).toEqual(initialState);
    })

    it("Trigger ADD_TO_CART", () => {
        const reducer = CartReducer(initialState, {
            type: ADD_TO_CART,
            payload: {
                product: {
                    "@id": "/api/products/1",
                    "@type": "Product",
                    "id": 1,
                    "name": "Natus nesciunt repellendus minima perspiciatis praesentium sapiente cum.",
                    "price": 89455,
                    "image": "http://loremflickr.com/640/480/city?random=0&lock=0",
                    "isAvailable": true
                },
                quantity: 2
            }
        })

        expect(reducer).toEqual(midStateCondition)
        
    })

    it("Trigger ADD_TO_CART with already products", () => {
        const reducer = CartReducer(midStateCondition, {
            type: ADD_TO_CART,
            payload: {
                product: {
                    "@id": "/api/products/3",
                    "@type": "Product",
                    "id": 3,
                    "name": "Iste voluptates quia quia officiis cumque eos ut.",
                    "price": 87975,
                    "image": "http://loremflickr.com/640/480/city?random=2&lock=2",
                    "isAvailable": true
                },
                quantity: 10
            }
        })

        expect(reducer).toEqual(advancedStateCondition)
        
    })

    it("Trigger DELETE_PRODUCT", () => {
        const reducer = CartReducer(advancedStateCondition, {
            type: DELETE_PRODUCT,
            payload: 1
        })

        expect(reducer).toEqual({
            cart_list: {
                3: {
                    item: {
                        "@id": "/api/products/3",
                        "@type": "Product",
                        "id": 3,
                        "name": "Iste voluptates quia quia officiis cumque eos ut.",
                        "price": 87975,
                        "image": "http://loremflickr.com/640/480/city?random=2&lock=2",
                        "isAvailable": true
                    },
                    quantity: 10
                }
            },
            total: 879750,
            pin: 10,
        })
    })

    it("Trigger CHANGE_PRODUCT_QUANTITY", () => {
        const reducer = CartReducer(advancedStateCondition, {
            type: CHANGE_PRODUCT_QUANTITY,
            payload: {
                id: 3,
                quantity: 1
            }
        })

        expect(reducer).toEqual({
            cart_list: {
                3: {
                    item: {
                        "@id": "/api/products/3",
                        "@type": "Product",
                        "id": 3,
                        "name": "Iste voluptates quia quia officiis cumque eos ut.",
                        "price": 87975,
                        "image": "http://loremflickr.com/640/480/city?random=2&lock=2",
                        "isAvailable": true
                    },
                    quantity: 1
                }
            },
            total: 87975,
            pin: 1,
        })
    })

    it("Trigger EMPTY_CART", () => {
        const reducer = CartReducer(advancedStateCondition, {
            type: EMPTY_CART
        })

        expect(reducer).toEqual({
            cart_list: {},
            total: 0,
            pin: 0,
        })
    })
})