import React from 'react';
import Header from "../Header/Header";
import styled from './Layouts.module.css'

const Layouts = ({children}) => {
    return (
        <div >
            <div className={styled.container_header}>
                <Header/>
            </div>

            <div className={styled.container_main}>
                <main>
                    {children}
                </main>

            </div>


        </div>
    );
};

export default Layouts;