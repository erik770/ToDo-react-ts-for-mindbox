import React, {FC, ReactNode} from "react";
import classes from './MyButton.module.scss';

interface MyButtonProps {
    children: ReactNode,
    className: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const MyButton: FC<MyButtonProps> = function ({children, className, onClick, ...props}) {
    return (
        <button onClick={onClick}  className={[classes.myBtn, className].join(' ')}  {...props}>
            {children}
        </button>
    )
}