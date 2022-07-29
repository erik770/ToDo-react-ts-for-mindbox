import React, {ReactNode} from "react";
import classes from './MyButton.module.scss';

export const MyButton = function ({children, className, ...props}: {children: ReactNode, className: any}) {
    return (
        <button className={[classes.myBtn, className].join(' ')}  {...props}>
            {children}
        </button>
    )
}