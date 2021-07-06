import React, {useState} from "react";
import GoBack from "../../components/GoBack";
import { BasicContainer } from "../../styles/containers";
import { CartContainer, ProductCardExtend, EmptyCart } from "./style";
import { StateCart } from "../../interfaces/cart";
import { StateUser } from "../../interfaces/user";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { formatPrice } from "../../helpers/priceFormat";
import { CartProductImg, TinyIcons } from "../../styles/images";
import { PriceCartTitle, CardTitleSingleProduct } from "../../styles/titles";
import { PrimaryBtn } from "../../styles/buttons";
import Trash from "../../assets/icons/trash.svg";
import { DELETE_PRODUCT, CHANGE_PRODUCT_QUANTITY, EMPTY_CART } from "../../store/cart/types";
import Axios from "../../axios";
import { ErrorMessage } from "../../styles/interactiveMessages";
import { STORE_NEW_ORDER } from "../../store/order/types";


const Cart = () : JSX.Element => {
    const cart = useSelector((state: StateCart) => state.cart.cart_list);
    const total = useSelector((state: StateCart) => state.cart.total);
    const user = useSelector((state: StateUser) => state.user.customer);
    const dispatch = useDispatch();
    const history = useHistory();
    const [orderFailure, setOrderFailure] = useState(null);

    const changeQuantity = (id : number, quantity : number) : void => {
        const dataToUpdate = {
            id,
            quantity
        }
        dispatch({type:CHANGE_PRODUCT_QUANTITY, payload:dataToUpdate})
    }
    
    const OrderDatCart = async () => {
        if(user && Object.keys(user).length > 0)
        {
            // ACTION TO ORDER
            try {

                const userProfile = {
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phoneNumber: user.phoneNumber,
                    address: {
                        street: user.street,
                        complement: user.complement,
                        zipCode: user.zipCode,
                        country: user.country
                    }
                }

                const items = Object.keys(cart).map((key: string) => {
                    return (
                        {
                            product: cart[Number(key)].item!["@id"], 
                            quantity: cart[Number(key)].quantity
                        }
                    )
                });

                const response = await Axios.post("orders", {
                    customer: userProfile, 
                    items
                });

                if(response.status === 201)
                {
                    dispatch({type:STORE_NEW_ORDER, payload:response.data})
                    dispatch({type:EMPTY_CART})
                    history.push("/profile?action=order&msg=success")
                }

            } catch(e) {
                setOrderFailure(e.response.data["hydra:description"])
            }
            
        } else {
            // PUSH TO LOGIN COMPONENT
            history.push("/login")
        }
    }

    return (
        <BasicContainer>
            <GoBack />
            <CartContainer>
                <div id="productList">
                {
                    cart && Object.keys(cart).length > 0 ?
                        Object.keys(cart).map((key: string) => 
                            <ProductCardExtend key={key} data-testid="product-card">
                                <CartProductImg src={cart[Number(key)].item!.image} />
                                <div className="productInfo">
                                    <p className="price">{formatPrice(cart[Number(key)].item!.price)}</p>
                                    <select value={cart[Number(key)].quantity} onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => changeQuantity(cart[Number(key)].item!.id, Number(e.target.value))}>
                                        {
                                            [...Array(cart[Number(key)].item!.availableQuantity)].map((e, index) => <option key={index} value={index + 1}>{index + 1}</option>)
                                        }
                                    </select>
                                    <CardTitleSingleProduct>{cart[Number(key)].item!.name}</CardTitleSingleProduct>
                                    <p>SUBTOTAL {formatPrice(cart[Number(key)].quantity! * cart[Number(key)].item!.price)}</p>
                                    <div className="clearProduct">
                                        <TinyIcons src={Trash} alt="Delete" onClick={() => dispatch({type: DELETE_PRODUCT, payload: cart[Number(key)].item!.id})} />
                                    </div>
                                </div>
                            </ProductCardExtend>
                        )
                    :
                        <EmptyCart>
                            <p data-testid="empty-cart">🙄</p>
                            <p>Nothing in your cart !</p>
                            <p>Please check our amazing products</p>
                        </EmptyCart>
                    
                }
                </div>
                <div id="globalCartInfo">
                    <PriceCartTitle><span>TOTAL {formatPrice(total)}</span></PriceCartTitle>

                    <PrimaryBtn onClick={OrderDatCart}>CHECKOUT</PrimaryBtn>
                    { 
                        orderFailure ? <ErrorMessage>{ orderFailure }</ErrorMessage> : null
                    }
                </div>
               
            </CartContainer>
        </BasicContainer>
    )
}

export default Cart;