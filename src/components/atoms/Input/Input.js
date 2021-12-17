import React from 'react';
import styled from './Input.module.css'
const Input = ({label,placeholder,required}) => {
    return (
        <div>
            <div>
                <label>
                    {label} {required && <span>*</span>}
                </label>
                <input className={styled.input_input} type="text" name="" placeholder={placeholder} />
            </div>
        </div>
    );
};

export default Input;