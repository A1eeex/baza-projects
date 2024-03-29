import React from 'react';
import styled from "./Registration.module.css";
import {Link} from "react-router-dom";
import backgroundImg from "../LoginPage/aer.jpg";

const RegistrationPage = () => {
    return (
        <>
            <div className={styled.registrationContainer}>
                <main>
                    <img className={styled.loginBackground} src={backgroundImg} alt="registerBackGround"/>

                    <form className={styled.loginFormContainer}>
                        <div className={styled.wrapContent}>
                            <h1 className={styled.registrationTitle}>Registration</h1>
                            <div className={styled.wrapInputs}>
                                <input
                                    className={styled.dataRegister}
                                    name='firstName'
                                    type="text"
                                    placeholder='First name'
                                />
                                <input
                                    className={styled.dataRegister}
                                    name='lastName'
                                    type="text"
                                    placeholder='Last name'
                                />
                                <input
                                    className={styled.dataRegister}
                                    name='email'
                                    type="email"
                                    placeholder='Email'
                                />
                                <input
                                    className={styled.dataRegister}
                                    name='phoneNumber'
                                    type="tel"
                                    placeholder='Phone number'
                                />
                                <div className={styled.registerWrapSybTitleInp + ' ' + styled.dataRegister}>
                                    <span className={styled.registerSybTitle}>Birthday:</span>
                                    <input
                                        name='birthday'
                                        type="date"
                                    />
                                </div>
                            </div>

                            <div className={styled.wrapSubmitRegistrationBtn}>
                                <Link to={'/'}>
                                    <button type='submit' className={styled.submitRegistrationBtn}>Accept</button>
                                </Link>
                            </div>

                            <Link to={'/login'}>
                                login
                            </Link>
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
};

export default RegistrationPage;