import React from 'react';
import Layouts from "../../molekuls/Layouts/Layouts";
import Input from "../../atoms/Input/Input";
import styled from './ProjectAddPage.module.css'
import {Link} from "react-router-dom";

const ProjectAddPage = () => {
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
                                    <button className={styled.btnBack}> back</button>
                                </Link>
                            </div>
                            <div>
                                <button type='submit'>Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </Layouts>
        </div>
    );
};

export default ProjectAddPage;