import styled from "@emotion/styled";
import React from "react";
import Heart from "../../assets/icons/heart.svg";
import SwissFlag from "../../assets/icons/switzerland.svg";
import { TinyIcons } from "../../styles/images";

const FooterSection = styled.footer`
    width: 100%;
    height: 4vh;
    display: flex;
    justify-content: center;
    background-color: #000;
    position: fixed;
    bottom: 0px;
    left: 0px;

    #loveMessage {
        font-size: 0.6em;
        display: flex;
        align-items: center;

        span {
            background-color: #fff;
            display: flex;
            flex-wrap: nowrap;
        }
    }
`;

const Footer = () : JSX.Element => {
    return (
        <FooterSection>
            <section id="loveMessage">
                <span>
                    <p>Coded with </p>
                    <TinyIcons src={Heart} />
                    <p> from </p>
                    <TinyIcons src={SwissFlag} />
                </span>
            </section>
        </FooterSection>
    )
}

export default Footer;