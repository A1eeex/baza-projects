import React from 'react';
import styled from './Pagination.module.css'
const Pagination = ({totalPost,postPerPage, paginate, hash}) => {
    const pageNumber = []
    for(let i = 1; i<= Math.ceil(totalPost/ postPerPage); i++){
        pageNumber.push(i)
    }
    return (
        <div>
            <nav>
                <ul className={styled.pagination}>
                    {pageNumber.map((item, i)=>(
                        <li key={i} className={`${styled.paginationItem} ${(i +1) === hash ? styled.paginationItemActive : null}`}>
                            <a onClick={()=> paginate(item)} className={styled.paginationLink}> {item}</a>
                        </li>
                    ) )}
                </ul>
            </nav>

        </div>
    );
};

export default Pagination;