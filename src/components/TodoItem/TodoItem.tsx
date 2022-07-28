import React, {FC, useState} from 'react';
import {ITodo} from "../../types/types";
import classes from "./TodoItem.module.scss";

interface ITodoProps {
    todoInfo : ITodo,
    deleteTodo: (deletingTodo: ITodo) => void
    changeTodoDoneStatus: (changingTodo: ITodo) => void
}

export const TodoItem: FC<ITodoProps> = ({todoInfo, deleteTodo, changeTodoDoneStatus }) => {
    const {id, title, isDone} = todoInfo;
    const [checked, setChecked] = useState(isDone);

    return (
        <div className={classes.todoItem} key={id}>
            {isDone
                ? <i onClick={() => changeTodoDoneStatus(todoInfo)} className={['fa-solid', 'fa-square-check', classes.todoItem__icon].join(' ')}></i>
                : <i onClick={() => changeTodoDoneStatus(todoInfo)} className={['fa-regular', 'fa-square-check', classes.todoItem__icon].join(' ')}></i>
            }
            <span className={classes.todoItem__text}>{title}</span>
            <i className={['fa-regular', 'fa-trash-can', classes.todoItem__icon].join(' ')}
            onClick={() => deleteTodo(todoInfo)}></i>
        </div>
    );
};

