import React, {useState} from 'react';
import styled from './TableProjekts.module.css'
import Search from "../../atoms/Search/Search";
import {Link, NavLink} from "react-router-dom";

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
        {id: 1, title: 'Numer'},
        {id: 2, title: 'Nazwa'},
        {id: 3, title: 'Rok'},
        {id: 4, title: 'Kraj'},
        {id: 5, title: 'Powierzchnia'},
        {id: 6, title: 'Kierownik'},
        {id: 7, title: 'Data Rozpoczęcia'},
        {id: 8, title: 'Data Zakończenia'},
        {id: 9, title: 'Zakres'},
        {id: 10, title: 'Charakter Obiektu'},
        {id: 11, title: 'Wartość'},
        {id: 12, title: 'Uwagi'},
    ]

    return (
        <div className={styled.TableContainer}>
            <div className={styled.tableTopHeader}>
                <div>
                    <Search onChange={handleChange}
                            value={inpValue}
                    />
                </div>
                <div>
                    <Link to={'/project-add'}>
                        <button className={styled.buttonAdd}>+ add project</button>
                    </Link>

                </div>
            </div>
            <div className={styled.tableHead}>
                {headerDescriptions.map((item) => (
                    <div className={styled.tableHeadItem} key={item.id}>{item.title}</div>
                ))}</div>

            {filterPost.map((item, i) => (
                <div key={i} className={styled.tableColumn}>
                    <div className={styled.tableColumnNumber}>{item.work_order_id}</div>
                    <div>
                        <Link to={`project/:${item.work_order_id}`}>
                            {item.description}
                        </Link>
                    </div>
                    <div>{item.year}</div>
                    <div>
                        <a href={item.coords} target="_blank" >
                            {item.city}
                        </a>

                    </div>
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