import React, {FC} from 'react';
import {ITodo} from "../../types/types";

const TodoItem: FC<ITodo> = ({id, title, isDone}) => {
    return (
        <div key={id}>
            {isDone
                ? <i className="fa-solid fa-square-check"></i>
                : <i className="fa-regular fa-square-check"></i>
            }
            <span>{title}</span>
            <i className="fa-regular fa-trash-can"></i>
        </div>
    );
};

export default TodoItem;