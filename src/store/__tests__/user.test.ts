import { UserReducer } from "../user/userReducer";
import { STORE_USER_INFO } from '../user/types';

describe("User Reducer", () => {
    const initialState = {
        customer: null,
    }

    it("If no action.type triggered", () => {
        const reducer = UserReducer(undefined, {});
        expect(reducer).toEqual(initialState);
    })

    it("Trigger STORE_USER_INFO", () => {
        const reducer = UserReducer(initialState, {
            type: STORE_USER_INFO,
            payload: {
                firstName: "Joe",
                lastName: "Joe",
                email: "Joe",
                phoneNumber: "Joe",
                street: "Joe",
                complement: "Joe",
                zipCode: "Joe",
                country: "Joe"
            }
        })

        expect(reducer).toEqual({
            customer: {
                firstName: "Joe",
                lastName: "Joe",
                email: "Joe",
                phoneNumber: "Joe",
                street: "Joe",
                complement: "Joe",
                zipCode: "Joe",
                country: "Joe"
            }
        })
    })
})