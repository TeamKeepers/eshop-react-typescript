import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { HOME, PRODUCT_PAGE, CART, LOGIN, PROFILE } from "./paths";
import { PageContainer, MainContainer } from "../styles/containers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Page404 from "../pages/404";
import Home from "../pages/Home";
import ProductPage from "../pages/Product";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const Routes = () : JSX.Element => {

    return (
        <BrowserRouter>
            <PageContainer>
                <Header />
                <MainContainer>
                     <Switch>
                        <Route exact path={HOME} component={Home} />
                        <Route exact path={PRODUCT_PAGE} component={ProductPage} />
                        <Route exact path={CART} component={Cart} />
                        <Route exact path={LOGIN} component={Login} />
                        <Route exact path={PROFILE} component={Profile} />
                        <Route component={Page404} />
                     </Switch>
                </MainContainer>
                <Footer />
            </PageContainer>
        </BrowserRouter>
    )
}

export default Routes;