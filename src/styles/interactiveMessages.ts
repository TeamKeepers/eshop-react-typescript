import styled from "@emotion/styled";

export const ErrorMessage = styled.div`
    width: 100%;
    margin-top: 20px;
    padding: 20px;
    font-size: 0.8em;
    border-radius: ${props => props.theme.radius};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.catchy};
`;