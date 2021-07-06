import React from "react";
import { Provider } from 'react-redux';
import store from '../../store';
import { render, cleanup, fireEvent, act, getAllByLabelText } from "@testing-library/react";
import Login from "../Login";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../styles";

afterEach(cleanup);

describe("Login component", () => {
    const { debug, getByTestId, queryAllByText } = render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Login />
            </ThemeProvider>
        </Provider>
    );

    // debug();

    // DECLARE ALL ELEMENT NEEDED FOR THE TEST
    const form = getByTestId("login-form");
    const SubBtn = getByTestId("submit-btn");

    // GET ALL THE INPUTS
    const email = getByTestId("email");
    const firstName = getByTestId("firstName");
    const lastName = getByTestId("lastName");
    const phoneNumber = getByTestId("phoneNumber");
    const street = getByTestId("street");
    const zipCode = getByTestId("zipCode");
    const country = getByTestId("country");
    
    it("<Login /> with empty values [errors]", async () => {        
        // Check elements
        expect(form.tagName).toBe("FORM");
        // Events of submitting the form, we wait for this async event (component re-rendered)
        await act( async () => {
            fireEvent.click(SubBtn);
        });
        // Check if error when empty inputs
        expect(queryAllByText("valid")).toBeTruthy();
    })

    it("<Login /> with False values", async () => {        
       fireEvent.change(email, {
           target: {value: "Joe"}
       })
       fireEvent.change(firstName, {
            target: {value: "Joe"}
        })
       fireEvent.change(lastName, {
            target: {value: "Joe"}
        })
       fireEvent.change(phoneNumber, {
            target: {value: "Joe"}
        })
       fireEvent.change(street, {
            target: {value: "Joe"}
        })
       fireEvent.change(zipCode, {
            target: {value: "Joe"}
        })
       fireEvent.change(country, {
            target: {value: "Joe"}
        })

       await act( async () => {
            fireEvent.click(SubBtn);
        });
        // Check if error with falsy values
        expect(queryAllByText("valid")).toBeTruthy();
    })

    it("<Login /> should be OK", async () => {        
        fireEvent.change(email, {
            target: {value: "joe@joe.ch"}
        })
        fireEvent.change(firstName, {
             target: {value: "Joe"}
         })
        fireEvent.change(lastName, {
             target: {value: "Joe"}
         })
        fireEvent.change(phoneNumber, {
             target: {value: "+41445866056"}
         })
        fireEvent.change(street, {
             target: {value: "Joe"}
         })
        fireEvent.change(zipCode, {
             target: {value: "8000"}
         })
        fireEvent.change(country, {
             target: {value: "CH"}
         })
         
        await act( async () => {
             fireEvent.click(SubBtn);
        });
        // Check if error with falsy values
        expect(queryAllByText("valid")).toEqual([]);
     })


})