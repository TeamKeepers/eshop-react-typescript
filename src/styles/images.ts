import styled from "@emotion/styled";

export const HeaderIcons = styled.img`
    width: 50px;
    margin: 0 5%;
    height: 100%;
    `;

export const TinyIcons = styled.img`
    width: 23px;
    margin: 0 8px;
    `;

export const BasicImg = styled.img`
    width: 220px;

    @media screen and (max-width: 700px) {
        padding-top: 50px;
    }
`;

export const ProductImg = styled.img`
    width: 100%;
    height: 20vh;
    object-fit: cover;
    object-position: center center;
`;

export const LoadingImg = styled.img`
    width: 50%;
    height: 50vh;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;

export const SingleProductImg = styled.img`
    width: 50%;
    object-fit: cover;
    object-position: center center;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export const CartProductImg = styled.img`
    width: 40%;
    object-fit: cover;
    object-position: center center;
`;
