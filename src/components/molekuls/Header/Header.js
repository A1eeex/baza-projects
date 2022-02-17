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
            {/*<header className={styled.header}>*/}
            {/*    <div className={styled.header_container}>*/}
            {/*        <div className={styled.header_column}>*/}
            {/*            <div className={styled.header_left}>*/}
            {/*                <Link style={{textDecoration: 'none'}} to='/'>*/}
            {/*                    <div className={styled.header_logo}>*/}
            {/*                        <img src={logo} alt="logo"/>*/}
            {/*                    </div>*/}
            {/*                </Link>*/}
            {/*            </div>*/}
            {/*            <div className={styled.header_right}>*/}

            {/*                <div className={styled.header_right_logout}>*/}
            {/*                    <Link to={'/login'}>*/}

            {/*                       <button className={styled.logoutBtn}><i className="fas fa-power-off"/> logout*/}
            {/*                       </button>*/}
            {/*                    </Link>*/}
            {/*                </div>*/}

            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</header>*/}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link style={{textDecoration: 'none'}} to='/'>
                                             <div className={styled.header_logo}>
                                             <img src={logo} alt="logo"/>
                                        </div>
                                      </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse   id="responsive-navbar-nav">

                        <Nav>
                            <div className={styled.header_right_logout}>
                                               <Link to={'/login'}>

                                                 <button className={styled.logoutBtn}><i className="fas fa-power-off"/> logout
                                                 </button>
                                                 </Link>
                                             </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;