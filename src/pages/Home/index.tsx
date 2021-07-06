import React, { useState } from "react";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadMoreContainer, BasicContainer, CardContainer } from "../../styles/containers";
import Axios from "../../axios";
import { ADD_MORE_PRODUCTS } from "../../store/product/types";
import { Product, StateProducts } from "../../interfaces/product";
import { CardTitle, CategoryTitle } from "../../styles/titles";
import { LoadingImg, ProductImg } from "../../styles/images";
import { formatPrice } from "../../helpers/priceFormat";
import { LoadBtn, PrimaryBtn } from "../../styles/buttons";
import Loading from "../../assets/gif/loading-squares.gif";
import { formatTitle } from "../../helpers/stringFormat";
import { CardLink } from "../../styles/links";
import { getProductsAction } from "../../store/product/actions/getAllProducts";
import { SystemErrors } from "../../interfaces/errors";

const ProductCardExtend = styled(CardContainer)`

    .CardText {
        margin: 10px;
        
        .price {
            font-size: 0.8em;
            margin-bottom: 10px;
        }
    }

    .CardBtn {
        display: flex;
        justify-content: center;
    }
    
`;

const Home = () : JSX.Element => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const { products, nextPage } = useSelector((state : StateProducts) => state.product);
    const { network_error } = useSelector((state: SystemErrors) => state.errors);

    useEffect(() => {
        dispatch(getProductsAction());
        setLoading(false);
    }, [])

    // GET THE REST OF PRODUCTS (PAGINATION)
    const getMoreProducts = () => {
        setLoading(true);
        if(nextPage)
        {
            const AddProducts = async () => {
                const {data} = await Axios.get(`${nextPage}`);
                dispatch({type: ADD_MORE_PRODUCTS, payload: data});
            }
            AddProducts().then(() : void => setLoading(false))
        }
    }
    
    return (
        <BasicContainer>
            {
                products.length ? 
                    products.map((product: Product)  => {
                        return (
                            <ProductCardExtend key={product["@id"]} >
                            <CardLink to={`product/${product.id}`}>
                                <ProductImg src={product.image} alt={`${product["@type"]} image`} />
                                <div className="CardText">
                                    <CardTitle>{formatTitle(product.name)}</CardTitle>
                                    <CategoryTitle><span>{product["@type"]}</span></CategoryTitle>
                                    <p className="price">{formatPrice(product.price)}</p>
                                </div>
                                <div className="CardBtn">
                                    <PrimaryBtn { ...product.isAvailable == true ?? "disabled"}>{ product.isAvailable ? "MORE" : "Not available"}</PrimaryBtn>
                                </div>
                            </CardLink>
                            </ProductCardExtend>
                        )
                    })
                    
                : 
                    network_error ?
                        <p>NETWORK IS DOWN</p>
                    :
                        <LoadingImg src={Loading} />
                }
            {
                nextPage ?
                <LoadMoreContainer>
                    <LoadBtn 
                        onClick={getMoreProducts}
                        disabled={loading}
                    >
                        {
                            loading ?
                                "loading..."
                            :
                                "Show more"
                        }
                        
                    </LoadBtn>
                </LoadMoreContainer>
                : null
            }
        </BasicContainer>
    )
}

export default Home;