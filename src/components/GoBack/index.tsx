import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { GoBackBtn } from "../../styles/buttons";
import LeftArrow from "../../assets/icons/left-arrow.svg";
import { TinyIcons } from "../../styles/images"

const GoBackSection = styled.div`
    width: 100%;
    max-height: 10vh;
`;

const GoBack = () : JSX.Element => {
    const history = useHistory();
    return (
        <GoBackSection>
            <GoBackBtn onClick={() => history.goBack()}>   
                <TinyIcons src={LeftArrow} /> 
                Go back
            </GoBackBtn>
        </GoBackSection>
    )
}

export default GoBack;