import React, {useEffect, useState} from 'react';
import Layouts from "../../molekuls/Layouts/Layouts";
import {useParams} from "react-router-dom";
import {jsonOb} from "../../../env";
import styled from './ProjectEditPage.module.css'

const ProjectEditPage = () => {
    const {id} = useParams()
    const [projects, setProjects] = useState([])
    const [project, setProject] = useState({})

    console.log('project', project)
    const [nameVal, setNameVal] = useState('')
    console.log('name', nameVal)

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
                    </form>


                </div>

            </Layouts>
        </div>
    );
};

export default ProjectEditPage;