import React from "react";
import styled from "@emotion/styled";
import  { Title } from "../../styles/titles";
import UserIcon from "../../assets/icons/user.svg";
import CartIcon from "../../assets/icons/shopping-cart.svg";
import { HeaderIcons } from "../../styles/images";
import { BasicLink, CartIconLink } from "../../styles/links";
import { StateCart } from "../../interfaces/cart";
import { useSelector } from "react-redux";
import { StateUser } from "../../interfaces/user";

const Nav = styled.header`
    padding: 1%;
    width: 100%;
    height: 10vh;
    display: flex;

    #logoSection {
        width: 25%;

        @media screen and (max-width: 700px) {
            width: 50%;
        }
    };

    #menuSection {
        width: 75%;
        display: flex;
        justify-content: flex-end;
        margin-right: 2.5%;

        @media screen and (max-width: 700px) {
            width: 50%;
        }
    }

`;

const NavIconLink = styled(BasicLink)`
    margin-right: 8%;
`;

const Header = () : JSX.Element => {
    const pin = useSelector((state: StateCart) => state.cart.pin)
    const user = useSelector((state: StateUser) => state.user.customer);
    
    return (
        <Nav>
            <section id="logoSection">
                <BasicLink to="/">
                    <Title><span>MyEshop</span></Title>
                </BasicLink>
            </section>
            <nav id="menuSection">
                <NavIconLink to={user && Object.keys(user).length > 0 ? "/profile" : "/login"}>
                    <HeaderIcons src={UserIcon} alt="My account" />
                </NavIconLink>
                <CartIconLink to="/cart">
                    <HeaderIcons src={CartIcon} alt="My cart" />
                    {
                        pin ? <span id="pin">{pin}</span> : null
                    }
                </CartIconLink>
            </nav>
        </Nav>
    )
}

export default Header;