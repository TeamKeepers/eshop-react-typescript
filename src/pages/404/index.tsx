import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import Anim404 from "../../assets/gif/404.gif";
import { CatchyBtn } from "../../styles/buttons";
import { BasicImg } from "../../styles/images";

const Section404 = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const Page404 = () : JSX.Element => {
    const history = useHistory();
    return (
        <Section404>
            <BasicImg src={Anim404} alt="404" />
            <h2>Woopsy</h2>
            <p>Lost, aren&apos;t you ?</p>
            <CatchyBtn onClick={() => history.goBack()}>Let&apos;s go back</CatchyBtn>
        </Section404>
    )
}

export default Page404;