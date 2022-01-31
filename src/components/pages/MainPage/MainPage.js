import React, {useEffect, useState} from 'react';
import Layouts from "../../molekuls/Layouts/Layouts";
import TableProjects from "../../molekuls/TableProjekts/TableProjekts";
import {jsonOb} from "../../../env";
import styled from './Main.module.css'
import {Redirect} from "react-router-dom";
const MainPage = () => {

    const [data, setData] = useState([])
    useEffect(() => {

            new Promise(async (resolve, reject) => resolve(jsonOb))
                .then(value =>
            {
                const result = value.response.data
                setData(result)
            })
        }
        , [])

    return (
        // <Redirect to='/login' />
        <>
            <Layouts>
                <div className={styled.wrapTitle}>
                    <h1>lista Projektów</h1>
                </div>
                <TableProjects data={data}/>
            </Layouts>
        </>
    );
};

export default MainPage;