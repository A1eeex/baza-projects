import React from 'react';

const Pagination = ({totalPost,postPerPage, paginate}) => {
    const pageNumber = []
    for(let i = 1; i<= Math.ceil(totalPost/ postPerPage); i++){
        pageNumber.push(i)
    }
    return (
        <div>
            <nav>
                <ul>
                    {pageNumber.map((item, i)=>(
                        <li key={i}>
                            <a onClick={()=> paginate(item)}> {item}</a>
                        </li>
                    ) )}
                </ul>
            </nav>

        </div>
    );
};

export default Pagination;