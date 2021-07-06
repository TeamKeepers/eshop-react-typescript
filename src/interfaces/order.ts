export interface StateOrder {
    order: {
        orders: [
            {
                "@context": string;
                "@id": string;
                "@type": string;
                id: number;
                customer: {
                    "@type": string;
                    "@id": string;
                    id: number;
                    firstName: string;
                    lastName: string;
                    email: string;
                    phoneNumber: string;
                    address: {
                        "@type": string;
                        "@id": string;
                        street: string;
                        complement: string;
                        zipCode: string;
                        country: string;
                    };
                    orders: []
                };
                items: [
                    {
                        "@id": string;
                        "@type": string;
                        id: number;
                        product: string;
                        quantity: number;
                        order: string;
                        total: number;
                    }
                ];
                createdAt: string;
                updatedAt: string;
                total: number;
            }
        ]
    }
    
}
