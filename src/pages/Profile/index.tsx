import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { StateUser } from "../../interfaces/user";
import { BasicContainer, CardContainer } from "../../styles/containers";
import Fiesta from "../../assets/icons/new-product.svg";
import { BasicImg } from "../../styles/images";
import { CategoryTitleSingleProduct, SecondTitle } from "../../styles/titles";
import { RouteComponentProps } from "react-router-dom";
import { StateOrder } from "../../interfaces/order";
import { formatPrice } from "../../helpers/priceFormat";
import { formatDate } from "../../helpers/dateFormat";

const ProfileContainer = styled(BasicContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 80%;

    #welcomeUser {
        padding: 100px 0;
    }
`;

const OrderContainer = styled(CardContainer)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 50%;

    p {
        font-size: 0.8em;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const SuccessMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;

    & * {
        margin-bottom: 40px;
    }

    
`;

const Profile = (props: RouteComponentProps) : JSX.Element => {
    const user = useSelector((state: StateUser) => state.user.customer);
    const orders = useSelector((state: StateOrder) => state.order.orders);

    // TO DO GUILLAUME
    // NEED AN HOC TO PUSH USER ELSEWHERE IF NOT CONNECTED
    return (
        <ProfileContainer>
            {
                // TO DO GUILLAUME
                // Unclean way to check params
                props.location.search === "?action=order&msg=success" ?
                    <SuccessMessage>
                        <BasicImg src={Fiesta} alt="Success" />
                        <SecondTitle><span>CONGRATULATIONS {user.firstName}</span></SecondTitle>
                        <p>Thanks for the order, we are preparing it with extra dose of love !</p>
                    </SuccessMessage>
                :
                    <div id="welcomeUser">
                        <h2>Hello {user.firstName} !</h2>
                    </div>
            }
            <h5>My orders</h5>
            <BasicContainer>
            {
                orders.map(order => 
                    <OrderContainer key={order.id}>
                        <CategoryTitleSingleProduct><span>ORDER #{order.id}</span></CategoryTitleSingleProduct>
                        <p>Total: {formatPrice(order.total)}</p>
                        <p>{formatDate(order.createdAt)}</p>
                    </OrderContainer>
                )   
            }
            </BasicContainer>
        </ProfileContainer>
    )
}

export default Profile;