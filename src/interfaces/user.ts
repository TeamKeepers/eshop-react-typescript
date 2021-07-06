export interface StateUser {
    user: {
        customer: {
            firstName: string;
            lastName: string;
            email: string;
            phoneNumber: string;
            street: string;
            complement: string;
            zipCode: string;
            country: string
        }
    }
}

export interface UserForm {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: {
        street: string;
        complement: string;
        zipCode: number;
        country: string
    }
}
