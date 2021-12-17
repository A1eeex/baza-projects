import React, {useEffect, useState} from 'react';
import Layouts from "../../molekuls/Layouts/Layouts";
import {useParams} from "react-router-dom";
import styled from "./ProjectPage.module.css"
import {jsonOb} from "../../../env";

const ProjectPage = () => {

    const {id} = useParams()
    const [data, setData] = useState([])
    const [projectData, setProjectData] = useState({})

    new Promise(async (resolve, reject) => resolve(jsonOb))
        .then(value => {
            const result = value.response.data
            setData(result)
        })

    useEffect(() => {
            const newProject = data.find ((project) => {
                return `:${project.work_order_id}` === id
            })
            setProjectData(newProject)
        }
        , [data])

    console.log('project data >>> ', projectData)

    return (
        <div>
            <Layouts>
                <h1 className={styled.titleProject}>{projectData?.description}</h1>
                <div className={styled.container}>

                    <div className={styled.titleParams}>
                        <div>NumerProjektu:</div>
                        <div>NrBloku:</div>
                        <div>TypProduktu:</div>
                        <div>Lista Paramtrów:</div>
                        <div>Wartości Parametrów:</div>
                        <div>StartNalotu:</div>
                        <div>KoniecNalotu:</div>
                        <div>ZakresProduktu:</div>
                        <div>MiejsceArchiwizacji:</div>

                    </div>

                    <div className={styled.params}>
                        <div> {projectData?.work_order_id}</div>
                        <div> NrBloku</div>
                        <div> some tepe</div>
                        <div> params</div>
                        <div> some wartości params</div>
                        <div> some startNalotu</div>
                        <div> some KoniecNalotu</div>
                        <div> some ZakresProduktu</div>
                        <div> some MiejsceArchiwizacji</div>


                    </div>
                </div>


            </Layouts>
        </div>
    );
};

export default ProjectPage;