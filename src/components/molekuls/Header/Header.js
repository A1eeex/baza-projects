import React, {useState} from 'react';

import styled from './Header.module.css'
import logo from './logo.svg'

import {Link} from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Header = () => {
    const handleChange = (e) => {
        console.log(e)
    }
    return (
        <div>
            <header className={styled.header}>
                <div className={styled.header_container}>
                    <div className={styled.header_column}>
                        <div className={styled.header_left}>
                            <Link style={{textDecoration: 'none'}} to='/'>
                                <div className={styled.header_logo}>
                                    <img src={logo} alt="logo"/>
                                </div>
                            </Link>
                        </div>
                        <div className={styled.header_right}>

                            <div className={styled.header_right_logout}>
                                <Link className={styled.wrapLogoutIcons} to={'/login'}>
                                    <div className={styled.headerLogOutIcon1}>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

            {/*<Navbar bg="transparent" expand="lg" variant="dark">*/}
            {/*    <Container>*/}
            {/*        <Navbar.Brand href='/'>*/}
            {/*            <div className={styled.header_logo}>*/}
            {/*                <img src={logo} alt="logo"/>*/}
            {/*            </div>*/}

            {/*        </Navbar.Brand>*/}
            {/*        <Navbar.Toggle style={{ borderColor: 'black'}} aria-controls="responsive-navbar-nav">*/}
            {/*               <span>*/}
            {/*                <i style={{color: 'black', borderColor: 'black'}} className="fa-solid fa-bars"/>*/}
            {/*                   </span>*/}
            {/*        </Navbar.Toggle>*/}

            {/*        <Navbar.Collapse style={{ borderColor: 'gray' }} id="responsive-navbar-nav">*/}
            {/*            <Nav className="justify-content-end flex-grow-1 pe-3">*/}

            {/*                <Link className={styled.wrapLogoutIcons}to={'/login'}>*/}
            {/*                        <div className={styled.headerLogOutIcon1}>*/}
            {/*                        </div>*/}

            {/*                    /!*<button className={styled.logoutBtn}><i className="fa-solid fa-blog"></i> logout*!/*/}
            {/*                    /!*</button>*!/*/}
            {/*                </Link>*/}
            {/*            </Nav>*/}
            {/*        </Navbar.Collapse>*/}
            {/*    </Container>*/}
            {/*</Navbar>*/}
        </div>
    );
};

export default Header;