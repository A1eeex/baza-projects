import React, {useState} from 'react';
import styled from './TableProjekts.module.css'
import Search from "../atoms/Search/Search";
import {Link} from "react-router-dom";

const TableProjects = ({data}) => {
    const [inpValue, setInpValue] = useState('')
    const handleChange = (e) => {
        setInpValue(e.target.value)
    }
    const searchDescription = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) => {
            return (item.description.indexOf(term)) > -1 || (item.city.indexOf(term) > -1) || (item.start_date.indexOf(term) > -1)
        })
    }
    const filterPost = searchDescription(data, inpValue)
    const headerDescriptions = [
        {title: 'Numer'},
        {title: 'Nazwa'},
        {title: 'Rok'},
        {title: 'Kraj'},
        {title: 'Powierzchnia'},
        {title: 'Kierownik'},
        {title: 'Data Rozpoczęcia'},
        {title: 'Data Zakończenia'},
        {title: 'Zakres'},
        {title: 'Charakter Obiektu'},
        {title: 'Wartość'},
        {title: 'Uwagi'},
    ]

    return (
        <div className={styled.TableContainer}>
            <Search onChange={handleChange}
                    value={inpValue}
            />
            <div className={styled.tableHead}>
            {headerDescriptions.map((item)=>(
                    <div>{item.title}</div>
            ))}</div>

            {filterPost.map((item, i) => (
                <div key={i} className={styled.tableColumn}>
                    <div>{item.work_order_id}</div>
                    <div>
                    <Link to={`project/:${item.work_order_id}`}>
                    {item.description}
                    </Link>
                </div>
                    <div>{item.year}</div>
                    <div>{item.city}</div>
                    <div>{item.area}</div>
                    <div>{item.manager}</div>
                    <div>{item.start_date}</div>
                    <div>{item.end_date}</div>

                    {/*<div>{ item.assigned_to.length === 0 ? <b>- - - -</b> : item.assigned_to.map(( person, i ) => (*/}
                    {/*    <div key={ i }> { person.person_name }: <span*/}
                    {/*        className={ person.status === "In progress" ? styled.inProgress : styled.tableColumn__status }> { person.status }</span>*/}
                    {/*    </div>*/}
                    {/*)) }</div>*/}
                    <div>{item.range}</div>
                    <div>{item.status}</div>
                    <div>{item.priority}</div>
                    <div>{item.comments}</div>
                </div>

            ))}
        </div>
    );
};

export default TableProjects;