import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoBack from "../../components/GoBack";
import { SecondTitle } from "../../styles/titles";
import { CatchyBtn } from "../../styles/buttons";
import { UserFormErrors } from "../../interfaces/errors";
import { STORE_USER_INFO } from "../../store/user/types";
import { LoginContainer, FormContainerExpend } from "./style";
import countryList from 'react-select-country-list';


const Login = () : JSX.Element => {
    const { register, handleSubmit, formState: {errors} } = useForm<UserFormErrors>();
    const countryOptions = useMemo(() => countryList().getData(), [])
    const dispatch = useDispatch();
    const history = useHistory();

    const submitForm = (data: UserFormErrors) => {
        dispatch({type:STORE_USER_INFO, payload:data})
        history.push("/cart")
    }

    // TO DO GUILLAUME
    // Too verbose, need to clean all these inputs into 1 single component
    return (
        <LoginContainer>
            <GoBack />
            <div id="pageTitle">
                <SecondTitle><span>Please sign in</span></SecondTitle>
            </div>
            <FormContainerExpend 
                onSubmit={handleSubmit(submitForm)} 
                data-testid="login-form"
            >
                <section id="firstInputs">
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input 
                            id="email"
                            data-testid="email"  
                            {...register("email", {
                                required: "Please enter a valid email.",
                                pattern: {
                                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                  message: "This is not a valid email."
                                }
                            })}
                        />
                        {errors.email && <em className="error">{errors.email.message}</em>}
                    </div>
                    <div className="input">
                        <label htmlFor="firstName">First name</label>
                        <input 
                            id="firstName" 
                            data-testid="firstName"
                            {...register("firstName", {
                                required: "Please enter a valid first name."
                            })}
                        />
                        {errors.firstName && <em className="error">{errors.firstName.message}</em>}
                    </div>
                    <div className="input">
                        <label htmlFor="lastName">Last name</label>
                        <input 
                            id="lastName"  
                            data-testid="lastName"
                            {...register("lastName", {
                                required: "Please enter a valid last name."
                            })} 
                        />
                        {errors.lastName && <em className="error">{errors.lastName.message}</em>}
                    </div>
                    <div className="input">
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input 
                            id="phoneNumber"  
                            data-testid="phoneNumber"
                            {...register("phoneNumber", {
                                required: "Please enter a valid phone number.",
                                pattern: {
                                  value: /([0-9\s-]{7,})(?:\s*(?:#|x.?|ext.?|extension)\s*(\d+))?$/,
                                  message: "This is not a valid phone number."
                                }
                            })} 
                        />
                        {errors.phoneNumber && <em className="error">{errors.phoneNumber.message}</em>}
                    </div>
                </section>
                <section id="secondInputs">
                <div className="input">
                    <label htmlFor="street">Street address</label>
                        <input 
                            id="street"
                            data-testid="street"
                            {...register("street", {
                                required: "Please enter a valid street."
                            })}
                        />
                        {errors.street && <em className="error">{errors.street.message}</em>}
                    </div>
                    <div className="input">
                        <label htmlFor="complement">Complement</label>
                        <input id="complement" name="complement" />
                    </div>
                    <div className="input">
                        <label htmlFor="zipCode">Zip code</label>
                        <input 
                            id="zipCode"  
                            data-testid="zipCode"
                            {...register("zipCode", {
                                required: "Please enter a valid zip code.",
                                pattern: {
                                  value: /^\d+$/,
                                  message: "This is not a valid zip code."
                                }
                            })}
                        />
                        {errors.zipCode && <em className="error">{errors.zipCode.message}</em>}
                    </div>
                    <div className="input">
                        <label htmlFor="country">Country</label>
                        <select 
                            id="country" 
                            data-testid="country" 
                            {...register("country", {
                                required: "Please select a valid country.",
                                pattern: {
                                    value: /^[A-z]{2}$/,
                                    message: "Please select a valid country."
                                }
                            })}
                            defaultValue="Choose your country"
                        >
                            <option disabled>Choose your country</option>
                            {
                                countryOptions.map(country => 
                                    <option key={country.value} value={country.value}>{country.label}</option>
                                )
                            }
                        </select>
                        {errors.country && <em className="error">{errors.country.message}</em>}
                    </div>
                </section>
                <section id="CallToAction">
                    <CatchyBtn type="submit" data-testid="submit-btn">ORDER NOW</CatchyBtn>
                </section>
            </FormContainerExpend>
        </LoginContainer>
    )
}

export default Login;