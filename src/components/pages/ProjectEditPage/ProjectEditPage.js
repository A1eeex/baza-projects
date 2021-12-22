import React, {useEffect, useState} from 'react';
import Layouts from "../../molekuls/Layouts/Layouts";
import {Link, useParams} from "react-router-dom";
import {jsonOb} from "../../../env";
import styled from './ProjectEditPage.module.css'

const ProjectEditPage = () => {
    const {id} = useParams()
    const [projects, setProjects] = useState([])
    const [project, setProject] = useState({})

    const [nameVal, setNameVal] = useState('')
    const [yearVal, setYearVal] = useState('')


    new Promise(async (resolve, reject) => resolve(jsonOb))
        .then(value => {
            const result = value.response.data
            setProjects(result)
        })
    useEffect(() => {
            const newProject = projects.find((project) => {
                return `:${project.work_order_id}` === id
            })
            setProject(newProject)
            setNameVal(newProject?.description)
            setYearVal(newProject?.year)
        }
        , [projects])


    return (
        <div>
            <Layouts>

                <div className={styled.wrapTitleProject}>
                    <h1 className={styled.titleProject}>Edit Project nr:{project?.work_order_id}</h1>
                </div>
                <div className={styled.container}>

                    <form>
                        <div className={styled.wrapParams}>
                            <div className={styled.titleParams}>
                                Nazwa Projektu:
                            </div>
                            <div className={styled.wrapInputParams}>
                                <input className={styled.inpParams}
                                       name='name'
                                       type='text'
                                       value={nameVal || ''}
                                       onChange={e => setNameVal(e.target.value)}
                                       placeholder={'Nazwa projektu'}
                                />
                            </div>
                        </div>
                        <div className={styled.wrapParams}>
                            <div className={styled.titleParams}>
                                Rok:
                            </div>
                            <div className={styled.wrapInputParams}>
                                <input className={styled.inpParams}
                                       name='year'
                                       type='text'
                                       value={yearVal || ''}
                                       onChange={e => setYearVal(e.target.value)}
                                       placeholder={'Rok'}
                                />
                            </div>
                        </div>

                        <div className={styled.wrapParams}>
                            <div className={styled.titleParams}>
                                Rok:
                            </div>
                            <div className={styled.wrapInputParams}>
                                <input className={styled.inpParams}
                                       name='city'
                                       type='text'
                                       value={yearVal || ''}
                                       onChange={e => setYearVal(e.target.value)}
                                       placeholder={'Kraj'}
                                />
                            </div>
                        </div>

                        <div className={styled.wrapButtons}>
                            <Link to={`/project/${id}`}>
                                <button className={styled.btnBack}> &#8701; back</button>
                            </Link>
                            <button type='submit' className={styled.btnSubmit}>submit &#10003;</button>
                        </div>
                    </form>


                </div>

            </Layouts>
        </div>
    );
};

export default ProjectEditPage;