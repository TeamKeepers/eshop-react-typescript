import styled from "@emotion/styled";
import { FormContainer, BasicContainer } from "../../styles/containers";

export const FormContainerExpend = styled(FormContainer)`
    flex-wrap: wrap;
    min-height: 70vh;

    #firstInputs {
        width: 45%;

        @media screen and (max-width: 1000px) {
            width: 80%;
        }
    }

    #secondInputs {
        width: 45%;
        
        @media screen and (max-width: 1000px) {
            width: 80%;
        }
    }

    #CallToAction {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .error {
        color: ${props => props.theme.colors.catchy};
        font-size: 0.7em;
    }
`;

export const LoginContainer = styled(BasicContainer)`
    flex-wrap: wrap;

    #pageTitle {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;