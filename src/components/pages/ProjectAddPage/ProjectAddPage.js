import React, {useEffect, useState} from 'react';
import Layouts from "../../molekuls/Layouts/Layouts";
import Input from "../../atoms/Input/Input";
import styled from './ProjectAddPage.module.css'
import {Link} from "react-router-dom";
import {jsonOb} from "../../../env";

const ProjectAddPage = () => {
    const [data, setData] = useState([])

    const [startDateVal, setStartDateVal] = useState('')

    new Promise(async (resolve, reject) => resolve(jsonOb))
        .then(value => {
            const result = value.response.data
            setData(result)
        })

    useEffect(() => {
        new Promise(async (resolve, reject) => resolve(jsonOb))
            .then(value => {
                const result = value.response.data
                setData(result)
            })
    }, [data])
    return (
        <>
            <Layouts>
                <div className={styled.wrapTitleAddProject}>
                    <h1>Add new projekt </h1>
                </div>
                <div className={styled.wrapForm}>
                    <form>

                        <div className={styled.wrapInputs}>
                            <div className={styled.leftInput}>
                                <Input
                                    required
                                    name='idNumber'
                                    type='text'
                                    label={'Numer Projektu'}
                                    placeholder={'Numer Projektu'}
                                    value={data.length + 1}
                                    readOnly={true}
                                />
                            </div>
                            <div className={styled.rightInput}>
                                <Input
                                    required
                                    name='name'
                                    tupe='text'
                                    label={'Nazwa'}
                                    placeholder={'Nazwa'}
                                />
                            </div>
                        </div>
                        <div className={styled.wrapInputs}>
                            <div className={styled.leftInput}>
                                <Input
                                    type='number'
                                    name='year'
                                    required label={'Rok'}
                                    placeholder={'Rok'}
                                />
                            </div>
                            <div className={styled.rightInput}>
                                <Input
                                    required
                                    name='citi'
                                    tupe='text'
                                    label={'Kraj'}
                                    placeholder={'Kraj'}
                                />
                            </div>
                        </div>
                        <div className={styled.wrapInputs}>
                            <div className={styled.leftInput}>
                                <Input
                                    required
                                    name='surface'
                                    tupe='text'
                                    label={'Powierzchnia'}
                                    placeholder={'Powierzchnia'}/>
                            </div>
                            <div className={styled.rightInput}>
                                <Input label={'Lista Produktów'} placeholder={'Lista Produktów'}/>
                            </div>
                        </div>
                        <div className={styled.wrapInputs}>
                            <div className={styled.leftInput}>
                                <Input required label={'Kierownik'} placeholder={'Kierownik'}/>
                            </div>
                            <div className={styled.rightInput}>
                                <Input required label={'Zakres'} placeholder={'Zakres'}/>
                            </div>
                        </div>

                        <div className={styled.wrapInputs}>
                            <div className={styled.leftInput}>
                                <Input
                                    required
                                    name='startDate'

                                    type="date"
                                    label={'Data Rozpoczęcia'}
                                    placeholder={'Data Rozpoczęcia'}
                                />

                            </div>
                            <div className={styled.rightInput}>
                                <Input required
                                       name='endDate'
                                       type="date"
                                       label={'Data Zakończenia'}
                                       placeholder={'Data Zakończenia'}
                                />
                            </div>
                        </div>
                        <div className={styled.wrapInputs}>
                            <div className={styled.leftInput}>
                                <Input required label={'Charakter Obiektu'} placeholder={'Charakter Obiektu'}/>
                            </div>
                            <div className={styled.rightInput}>
                                <Input required label={'Uwagi'} placeholder={'Uwagi'}/>
                            </div>
                        </div>
                        <div className={styled.wrapDownButtons}>
                            <div>
                                <Link to={'/'}>
                                    <button className={styled.btnBack}>
                                        &#8701; back
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <button className={styled.submitBtn} onClick={e => e.preventDefault()} type='submit'>Submit &#10003;</button>
                            </div>

                        </div>
                    </form>
                </div>
            </Layouts>
        </>
    );
};

export default ProjectAddPage;