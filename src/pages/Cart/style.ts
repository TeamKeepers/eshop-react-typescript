import styled from "@emotion/styled";
import { CardContainer, BasicContainer } from "../../styles/containers";

export const CartContainer = styled(BasicContainer)`
    width: 100%;
    min-height: 70vh;

    @media screen and (max-width: 700px) {
        display:flex;
        flex-wrap: wrap;
        height: auto;
    }
    
    #productList {
        width: 60%;

        @media screen and (max-width: 700px) {
            width: 100%;
        }
    }

    #globalCartInfo {
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        @media screen and (max-width: 700px) {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const ProductCardExtend = styled(CardContainer)`
    width: 90%;
    display: flex;
    margin: 0 0 20px 0;
    padding-bottom: 0;
    justify-content: space-between;

    .productInfo {
        
        & :first-of-type {
            margin-top: 5px;
        } 
        
        & * {
            margin-bottom: 10px;
        }

        width: 55%;
        display: flex;
        flex-direction: column;
        font-size: 0.5em;

        select {
            width: 45%;
        }
    }

    .clearProduct {
        display: flex;
        justify-content: flex-end;
    }
`;

export const EmptyCart = styled.div`
    width: 80%;
    height: 50%;
    background: ${props => props.theme.colors.fade};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.theme.radius};
    padding: 2%;
    font-size: 0.8em;
    text-align: center;
`;
