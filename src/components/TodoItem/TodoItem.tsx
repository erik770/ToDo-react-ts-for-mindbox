import React, {FC, useState} from 'react';
import {ITodo} from "../../types/types";
import "./TodoItem.scss";

interface TodoItemProps {
    todoInfo: ITodo,
    deleteTodo: (deletingTodo: ITodo) => void
    changeTodoDoneStatus: (changingTodo: ITodo) => void
}

export const TodoItem: FC<TodoItemProps> = ({todoInfo, deleteTodo, changeTodoDoneStatus}) => {
    const {id, title, isDone} = todoInfo;
    const todoItemClasses = ['todoItem'];
    if (isDone) {
        todoItemClasses.push('todoItem_checked')
    }
    return (
        <div className={todoItemClasses.join(' ')} key={id}>
            {isDone
                ? <i onClick={() => changeTodoDoneStatus(todoInfo)}
                     className={['fa-solid', 'fa-square-check', 'todoItem__icon'].join(' ')}></i>
                : <i onClick={() => changeTodoDoneStatus(todoInfo)}
                     className={['fa-regular', 'fa-square-check', 'todoItem__icon'].join(' ')}></i>
            }
            <span className={'todoItem__text'}>{title}</span>
            <i className={['fa-regular', 'fa-trash-can', 'todoItem__icon'].join(' ')}
               onClick={() => deleteTodo(todoInfo)}></i>
        </div>
    );
};

