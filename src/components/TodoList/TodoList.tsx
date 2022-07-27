import React, {FC} from 'react';
import {ITodo} from "../../types/types";

interface TodoListProps {
    todos: ITodo[],
}

export const TodoList: FC<TodoListProps> = ({todos}) => {
    return (
        <div>
            {todos.map((todo, index) =>
                <div key={todo.id}>
                    {index+1}) {todo.title}
                </div>)}
        </div>
    );
};