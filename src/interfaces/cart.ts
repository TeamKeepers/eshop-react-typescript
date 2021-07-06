export interface StateCart {
    cart: {
        cart_list: { 
            [index: number]: {
                item?: {
                    "@context": string;
                    "@id": string;
                    "@type": string;
                    "id": number;
                    "name": string;
                    "description": string;
                    "availableQuantity": number;
                    "price": number;
                    "image": string;
                },
                quantity?: number
            }
        };
        pin: number;
        total: number;
    }
}

export interface Cart {
    cart_list: { 
        [index: number]: {
            item?: {
                "@context": string;
                "@id": string;
                "@type": string;
                "id": number;
                "name": string;
                "description": string;
                "availableQuantity": number;
                "price": number;
                "image": string;
            },
            quantity?: number
        }
    };
    pin: number;
    total: number;
}

export interface ProductPostFormat {
    item: {
        "@context": string;
        "@id": string;
        "@type": string;
        "id": number;
        "name": string;
        "description": string;
        "availableQuantity": number;
        "price": number;
        "image": string;
    },
    quantity: number
}
