import React, {useEffect, useState} from 'react';
import Layouts from "../../molekuls/Layouts/Layouts";
import Input from "../../atoms/Input/Input";
import styled from './ProjectAddPage.module.css'
import {Link} from "react-router-dom";
import {jsonOb} from "../../../env";

const ProjectAddPage = () => {
    const [data, setData] = useState([])

    new Promise(async (resolve, reject) => resolve(jsonOb))
        .then(value => {
            const result = value.response.data
            setData(result)
        })

    useEffect(()=>{
        new Promise(async (resolve, reject) => resolve(jsonOb))
            .then(value => {
                const result = value.response.data
                setData(result)
            })
    },[data])
    return (
        <div>
            <Layouts>
                <div className={styled.wrapTitleAddProject}>
                    <h1>Add new projekt </h1>
                </div>
                <div className={styled.wrapForm}>
                    <form>

                        <div className={styled.wrapInputs}>
                            <div className={styled.leftInput}>
                                <Input
                                    value={data.length +1}
                                    readOnly={true}
                                    required
                                    label={'Numer Projektu'}
                                    placeholder={'Numer Projektu'}/>
                            </div>
                            <div className={styled.rightInput}>
                                <Input required label={'Name2'} placeholder={'NameProject2'}/>
                            </div>
                        </div>
                        <div className={styled.wrapInputs}>
                            <div className={styled.leftInput}>
                                <Input required label={'Name'} placeholder={'NameProject'}/>
                            </div>
                            <div className={styled.rightInput}>
                                <Input required label={'Name2'} placeholder={'NameProject2'}/>
                            </div>
                        </div>
                        <div className={styled.wrapInputs}>
                            <div className={styled.leftInput}>
                                <Input required label={'Name'} placeholder={'NameProject'}/>
                            </div>
                            <div className={styled.rightInput}>
                                <Input required label={'Name2'} placeholder={'NameProject2'}/>
                            </div>
                        </div>
                        <div className={styled.wrapInputs}>
                            <div className={styled.leftInput}>
                                <Input required label={'Name'} placeholder={'NameProject'}/>
                            </div>
                            <div className={styled.rightInput}>
                                <Input required label={'Name2'} placeholder={'NameProject2'}/>
                            </div>
                        </div>

                        <div className={styled.wrapDownButtons}>
                            <div>
                                <Link to={'/'} >
                                    <button className={styled.btnBack}>
                                        &#8701; back</button>
                                </Link>
                            </div>
                            <div>
                                <button className={styled.submitBtn} type='submit'>Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </Layouts>
        </div>
    );
};

export default ProjectAddPage;