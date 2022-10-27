import React, {useEffect, useState} from 'react';
import styled from './LoginPage.module.css'
import backgroundImg from './aer.jpg'
import logo from '../../molekuls/Header/images_logo.png'
import {Link} from "react-router-dom";

const LoginPage = () => {
    const [loginVal, setLoginVal] = useState('')
    const [passwordVal, setPasswordVal] = useState('')
    const [loginDirty, setLoginDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)

    const [loginError, setLoginError] = useState('Login nie może być pusty')
    const [passwordError, setPasswordError] = useState('Hasło nie może być puste')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (loginError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [loginError, passwordError])
    const handlerBlur = (e) => {
        switch (e.target.name) {
            case 'login':
                setLoginDirty(true)
                break
            case'password':
                setPasswordDirty(true)
                break
        }
    }
    const loginHandler = (e) => {
        setLoginVal(e.target.value)
        if (e.target.value.length < 3) {
            setLoginError('minimun 3 symboli')
            if (!e.target.value) {
                setLoginError('Login nie może być pusty')
            }
        } else if (e.target.value.length > 10) {
            setLoginError('maksymum 10 symboli')
        } else setLoginError('')
        // const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        // if (!regex.test(String(e.target.value).toLowerCase())) {
        //     setEmailError('Email nieprawidłowy')
        // }else {
        //     setEmailError('')
        // }
    }
    const passwordHandler = (e) => {
        setPasswordVal(e.target.value)
        if (e.target.value.length < 4) {
            setPasswordError('minimun 4 symboli')
            if (!e.target.value) {
                setPasswordError('Hasło nie może być puste')
            }
        } else {
            setPasswordError('')
        }
    }

    return (
        <div className={styled.loginContainer}>
            <main>

                <img className={styled.loginBackground} src={backgroundImg} alt="aer"/>

                <form className={styled.loginFormContainer}>
                    <div className={styled.wrapContent}>
                        <img src={logo} className={styled.formImg} alt="logo"/>
                        <div className={styled.formInputsWrap}>
                            {(loginDirty && loginError) && <span className={styled.error}> {loginError}</span>}
                            <input
                                name='login'
                                type="text"
                                value={loginVal}
                                onChange={e => loginHandler(e)}
                                onBlur={e => handlerBlur(e)}
                                placeholder='Login'
                            />
                            {(passwordDirty && passwordError) && <span className={styled.error}> {passwordError}</span>}
                            <input
                                name='password'
                                type="text"
                                value={passwordVal}
                                onChange={e => passwordHandler(e)}
                                onBlur={e => handlerBlur(e)}
                                placeholder='Password'
                            />
                        </div>

                        <Link to={'/'}>
                            <button disabled={!formValid} type='submit' className={!formValid? styled.loginBth: styled.validBnt}>login</button>
                            {/*<button disabled={!formValid} type='submit' >login</button>*/}
                        </Link>

                        <Link to={'/registration'}>
                            Registration
                        </Link>
                    </div>
                </form>

            </main>
        </div>
    );
};

export default LoginPage;