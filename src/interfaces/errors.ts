export interface UserFormErrors {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    street: string;
    complement: string;
    zipCode: string;
    country: string;
}

export interface SystemErrors {
    errors: {
        network_error: boolean
    }
}