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

    console.log('project data >>> ', project)
    return (
        <div>
            <Layouts>
                <div className={styled.testDiv}>
                    {project?.city}
                </div>

            </Layouts>
        </div>
    );
};

export default ProjectEditPage;