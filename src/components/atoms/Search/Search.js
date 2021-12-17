import React from 'react';
import styled from "./Search.module.css";



const Search = ({onChange, value}) => {
    return (
        <div className={ styled.searchContainer }>
            <div className={ styled.searchText}>Search: </div>
            <input
                onChange={ onChange }
                value={ value }
                type="text"
                placeholder='Search...'/>
        </div>
    );
};

export default Search;