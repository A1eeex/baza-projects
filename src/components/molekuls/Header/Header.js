import React, {useState} from 'react';

import styled from './Header.module.css'
import logo from './logo.svg'

import {Link} from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

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
            <Navbar bg="dark" variant="dark"
                    sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand>
                    <img src={logo} width="40px" height="40px" />{' '}

                </Navbar.Brand>

                <Navbar.Toggle className="coloring" />
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Products">
                            <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
                            <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
                            <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#about-us">About Us</Nav.Link>
                        <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default Header;