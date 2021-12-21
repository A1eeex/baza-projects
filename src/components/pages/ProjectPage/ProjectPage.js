import React, {useEffect, useState} from 'react';
import Layouts from "../../molekuls/Layouts/Layouts";
import {Link, useParams} from "react-router-dom";
import styled from "./ProjectPage.module.css"
import {jsonOb} from "../../../env";

const ProjectPage = () => {

    const {id} = useParams()


    const [data, setData] = useState([])
     const [projectData, setProjectData] = useState({})
    console.log('projectDataprojectData', projectData)
    new Promise(async (resolve, reject) => resolve(jsonOb))
        .then(value => {
            const result = value.response.data
            setData(result)
        })
    console.log(data)
    useEffect(() => {
            const newProject = data.find((project) => {
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

                    <div className={styled.wrapParams}>
                        <div className={styled.titleParams}>
                            Numer Projektu:
                        </div>
                        <div className={styled.params}>
                            {projectData?.work_order_id}
                        </div>
                    </div>

                    <div className={styled.wrapParams}>
                        <div className={styled.titleParams}>
                            Nr bloku:
                        </div>
                        <div className={styled.params}>
                            NrBloku
                        </div>
                    </div>

                    <div className={styled.wrapParams}>
                        <div className={styled.titleParams}>
                          Typ produktu
                        </div>
                        <div className={styled.params}>
                            someTypProduktu
                        </div>
                    </div>
                    <div className={styled.wrapParams}>
                        <div className={styled.titleParams}>
                            Lista paramtrów:
                        </div>
                        <div className={styled.params}>
                            someLista Paramtrów:
                        </div>
                    </div>
                    <div className={styled.wrapParams}>
                        <div className={styled.titleParams}>
                            Wartości parametrów:
                        </div>
                        <div className={styled.params}>
                            someWartości Parametrów:
                        </div>
                    </div>
                    <div className={styled.wrapParams}>
                        <div className={styled.titleParams}>
                            Start nalotu:
                        </div>
                        <div className={styled.params}>
                            {projectData?.start_date}
                        </div>
                    </div>
                    <div className={styled.wrapParams}>
                        <div className={styled.titleParams}>
                            Koniec nalotu:
                        </div>
                        <div className={styled.params}>
                            {projectData?.end_date}
                        </div>
                    </div>
                    <div className={styled.wrapParams}>
                        <div className={styled.titleParams}>
                            Zakres produktu:
                        </div>
                        <div className={styled.params}>
                            {projectData?.status}
                        </div>
                    </div>
                    <div className={styled.wrapParams}>
                        <div className={styled.titleParams}>
                            Miejsce archiwizacji:
                        </div>
                        <div className={styled.params}>
                            {projectData?.city}
                        </div>
                    </div>
                    <div className={styled.wrapBtnBack}>
                        <Link  to={`/project-edit/${id}`} className={styled.linkBack}>
                            <button className={styled.btnBack}>Edit</button>
                        </Link>

                        <Link to={'/'} className={styled.linkBack}>
                            <button className={styled.btnBack}> &#8701; back</button>
                        </Link>

                    </div>
                </div>



            </Layouts>
        </div>
    );
};

export default ProjectPage;