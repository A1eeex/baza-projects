import React, {useEffect, useState} from 'react';
import Layouts from "../../molekuls/Layouts/Layouts";
import {useParams} from "react-router-dom";
import {jsonOb} from "../../../env";
import styled from './ProjectEditPage.module.css'

const ProjectEditPage = () => {
    const {id}= useParams()
    console.log(id)
    const [projects, setProjects] = useState([])
    const [project, setProject] = useState({})

    new Promise(async (resolve, reject) => resolve(jsonOb))
        .then(value => {
            const result = value.response.data
            setProjects(result)
        })
    console.log(projects)
    useEffect(() => {
            const newProject = projects.find((project) => {
                return `:${project.work_order_id}` === id
            })
            setProject(newProject)
        }
        , [projects])

    return (
        <div>
            <Layouts>

                <div className={styled.wrapTitleProject}>
                    <h1 className={styled.titleProject}>Edit Project</h1>
                </div>
                <div className={styled.container}>


                    <div className={styled.wrapParams}>
                        <div className={styled.titleParams}>
                            Nazwa Projektu:
                        </div>
<div>
    <input type='text' placeholder={project?.description}/>

</div>



                    </div>

                </div>

            </Layouts>
        </div>
    );
};

export default ProjectEditPage;