import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import styled from "@emotion/styled";
import Axios from "../../axios";
import { ProductDetail } from "../../interfaces/product";
import { LoadingImg, SingleProductImg } from "../../styles/images";
import Loading from "../../assets/gif/loading-squares.gif";
import { SingleProductContainer } from "../../styles/containers";
import { CardTitleSingleProduct, CategoryTitle } from "../../styles/titles";
import { formatPrice } from "../../helpers/priceFormat";
import { PrimaryBtn } from "../../styles/buttons";
import GoBack from "../../components/GoBack";
import { addToCartAction } from "../../store/cart/actions/addToCart";

const ProductContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    #cardContent {
        width: 45%;
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 1000px) {
            width: 100%;
            margin-top: 20px;
        }

        & * {
            margin-bottom: 20px;
        }

        #price {
            font-size: 0.8em;
        }

        #cardBtn {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            select {
                margin-top: 20px;
                font-size: 0.5em;
                max-height: 40px;
                width: 25%;
            }

        }

        #cardDescription {
            font-size: 0.8em;
        }
    }
`;

const ProductPage: React.FC<RouteComponentProps<{id: string}>> = (props) : JSX.Element => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState<null | ProductDetail>(null);
    const [productQt, setProductQt] = useState<number>(1);

    useEffect(() => {
        Axios.get<ProductDetail>(`products/${props!.match.params.id}`)
        .then((value): void => {
            const {data} = value
            setProduct(data)
            setLoading(false)
        });
    }, [])
    
    const addToCart = () => {
        
        // TODO GUILLAUME 
        // IMPROVE THE ADD TO CART BEHAVIOR
        // if the quantity is added several time, we can add infinite products, cart will calculate the total but need to avoid this behavior
        if(product && productQt <= product!.availableQuantity)
        {
            const productToCart = {
                product,
                quantity: productQt
            }

            dispatch(addToCartAction(productToCart))
        }
    }

    return (
        {
            ...loading ?
                <LoadingImg src={Loading} />
            :
                <SingleProductContainer>
                    <GoBack />
                    <ProductContent>
                        <SingleProductImg src={product?.image} alt={`${product!["@type"]} image`} />
                        <div id="cardContent">
                            <CardTitleSingleProduct>{product?.name}</CardTitleSingleProduct>
                            <CategoryTitle><span>{product!["@type"]}</span></CategoryTitle>
                            <p id="cardDescription">{product?.description}</p>
                            <p id="price">{formatPrice(product!.price)}</p>
                            <div id="cardBtn">
                                
                                <select value={productQt} onChange={(e: React.ChangeEvent<HTMLSelectElement>): void => setProductQt(Number(e.target.value)) }>
                                    {
                                        [...Array(product?.availableQuantity)].map((e, index) => <option key={index} value={index + 1}>{index + 1}</option>)
                                    }
                                </select>
                                
                                <PrimaryBtn { ...product!.availableQuantity > 0 ?? "disabled"} onClick={addToCart}>ADD TO CART</PrimaryBtn>
                            </div>       
                        </div>
                    </ProductContent>
                </SingleProductContainer>

        }
    )
}

export default ProductPage;