import React, {FC} from 'react';
import {ITodo} from "../../types/types";
import classes from "./TodoItem.module.scss";

const TodoItem: FC<ITodo> = ({id, title, isDone}) => {

    return (
        <div className={classes.todoItem} key={id}>
            {isDone
                ? <i className={['fa-solid', 'fa-square-check', classes.todoItem__icon].join(' ')}></i>
                : <i className={['fa-regular', 'fa-square-check', classes.todoItem__icon].join(' ')}></i>
            }
            <span className={classes.todoItem__text}>{title}</span>
            <i className={['fa-regular', 'fa-trash-can', classes.todoItem__icon].join(' ')}></i>
        </div>
    );
};

export default TodoItem;