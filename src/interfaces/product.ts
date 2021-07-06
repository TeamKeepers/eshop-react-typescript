export interface StateProducts {
    product: {
        products: [],
        nextPage?: null | string
    };
}

export interface Product {
    "@id": string;
    "@type": string;
    id: number;
    image: string;
    isAvailable: boolean;
    name: string;
    price: number;
}

export interface ProductDetail {
    "@context": string;
    "@id": string;
    "@type": string;
    "id": number;
    "name": string;
    "description": string;
    "availableQuantity": number;
    "price": number;
    "image": string;
}

export interface Products
{
    "@context": string;
    "@id": string;
    "@type": string;
    "hydra:member": [];
    "hydra:totalItems": number;
    "hydra:view": {
        "@id": string;
        "@type": string;
        "hydra:first": string;
        "hydra:last": string;
        "hydra:previous": string;
        "hydra:next": string;
    };
}

export type ProductToCart = {
    product: ProductDetail,
    quantity: number
}