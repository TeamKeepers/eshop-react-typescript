import styled from "@emotion/styled";

export const PageContainer = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const MainContainer = styled.main`
    width: 100%;
    min-height: 86vh;
    display: flex;
    justify-content: center;
    overflow: scroll;
    margin-bottom: 50px;
`;

export const BasicContainer = styled.section`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const LoadMoreContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const SingleProductContainer = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const CardContainer = styled.div`
    width: 30%;
    box-shadow: ${props => props.theme.boxShadow};
    border: 0.5px ${props => props.theme.colors.fade} solid;
    margin-top: 25px;
    padding-bottom: 15px;
    max-height: 45vh;

    @media screen and (max-width: 1000px) {
        width: 45%;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
        min-height: 52vh;
    }

`;


export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 0.6em;

    .input {
        display: flex;
        flex-direction: column;
    }
`