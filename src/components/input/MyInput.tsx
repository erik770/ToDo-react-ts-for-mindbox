import React from "react";
import classes from './MyInput.module.scss';

export const MyInput = function (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input className={classes.myInput} {...props}></input>
    )
}