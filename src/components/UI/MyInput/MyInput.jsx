import React from 'react';
import cl from "./MyInput.module.css"
import cx from "classnames"

const MyInput = ({className = '',  color, ...props}) => {



    return (
        <div className={cx(cl.myInput__container, className)}>
            <input  {...props} className={cl.myInput} type="text"/>




        </div>
    );
};

export default MyInput;