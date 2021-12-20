import React from 'react';
import styled from './LoginPage.module.css'
import backgroundImg from './aer.jpg'
import logo from '../../molekuls/Header/logo.svg'
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <div className={styled.loginContainer}>
            <main>

                <img className={styled.loginBackground} src={backgroundImg} alt="aer"/>

                <form className={styled.loginFormContainer}>
                    <div className={styled.wrapContent}>
                        <img src={logo} className={styled.formImg} alt="logo"/>
                        <div className={styled.formInputsWrap}>
                            <input required placeholder='Login' type="email"/>
                            <input required placeholder='Password' type="text"/>
                        </div>

                        <Link to={'/'}>
                            <button className={styled.loginBth}>login</button>
                        </Link>
                    </div>
                </form>


            </main>
        </div>
    );
};

export default LoginPage;