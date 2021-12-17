import React from 'react';
import styled from './Input.module.css'
const Input = ({label,placeholder,required, value, readOnly, type,name}) => {
    return (
        <div>
            <div>
                <label>
                    {label} {required && <span>*</span>}
                </label>
                <input className={styled.input_input} type={type} name={name} placeholder={placeholder} value={value} readOnly={readOnly}  />
            </div>
        </div>
    );
};

export default Input;