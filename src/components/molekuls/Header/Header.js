import React from 'react';
import styled from './Header.module.css'
import logo from './logo.svg'

import {Link} from "react-router-dom";
const Header = () => {
    const handleChange = (e)=>{
        console.log(e)
    }
    return (
        <div>
            <header className={styled.header}>
                <div className={ styled.header_container }>

                    <div className={styled.header_column}>
                        <div className={styled.header_left}>
                            <Link style={{textDecoration: 'none'}} to='/'>
                                <div className={styled.header_logo} >
                                    <img src={logo} alt="logo"/>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Header;