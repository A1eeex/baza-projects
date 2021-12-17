import React, {useEffect, useState} from 'react';
import Layouts from "../../molekuls/Layouts/Layouts";
import TableProjects from "../../molekuls/TableProjekts/TableProjekts";
import {jsonOb} from "../../../env";

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
        <div>
            <Layouts>
                <TableProjects data={data}/>
            </Layouts>
        </div>
    );
};

export default MainPage;