import React from "react";
import { Provider } from 'react-redux';
import store from '../../store';
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles";
import { render, cleanup } from "@testing-library/react";
import Cart from "../Cart";

afterEach(cleanup);

jest.mock("react-redux", () => {
    ...jest.requireActual('react-redux'),
    useSelector
})

describe("Cart component", () => {
    const { debug, getByTestId } = render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Cart />
            </ThemeProvider>
        </Provider>
    )

    it("Empty Cart", () => {
        expect(getByTestId("empty-cart")).toBeTruthy();
    })

    it("Add a product to Cart", () => {
        const cart = { 
            [1]: {
                item: {
                    "@context": "/api/contexts/Product",
                    "@id": "/api/products/1",
                    "@type": "Product",
                    "id": 1,
                    "name": "Natus nesciunt repellendus.",
                    "availableQuantity": 33,
                    "price": 89455,
                    "image": "http://loremflickr.com/640/480/city?random=0&lock=0"
                },
                quantity: 2
            }
        };

        expect(getByTestId("product-card")).toBeTruthy();

    })

    it.todo("Change the quantity of a produt in Cart")

    it.todo("Clean the Cart")
})