import React from 'react';
import cl from "./MyButton.module.css"

const MyButton = ({children, className = '',  color, ...props}) => {

    const buttonClasses = [cl.myButton, className]

    const buttonColor = {
        'red' : cl.red,
        'green' : cl.green,
        'lightblue' : cl.lightblue,

    }
    for(let key in buttonColor) {
        if(color === key) {
            buttonClasses.push(buttonColor[key])
        }
    }




    return (
        <a {...props} className={buttonClasses.join(' ')} href="#">
            {children}
        </a>
    );
};

export default MyButton;