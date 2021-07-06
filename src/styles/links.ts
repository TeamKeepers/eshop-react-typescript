import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const BasicLink = styled(Link)`
    text-decoration: none;
`;

export const CardLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.main};
`;

export const CartIconLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.main};
    position: relative;

    #pin {
        background-color: ${props => props.theme.colors.catchy};
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        width: 20px;
        font-size: 0.5em;
        color: #fff;
        border-radius: 100%; 
        position: absolute;
        right: -10px;
        top: 8px;
    }    
`;

