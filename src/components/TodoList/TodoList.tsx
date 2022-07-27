import React, {FC, useEffect} from 'react';
import {ITodo} from "../../types/types";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
    todos: ITodo[],
}

export const TodoList: FC<TodoListProps> = ({todos}) => {
    useEffect(() => {
        const scriptTag = document.createElement('script');

        scriptTag.src = "https://kit.fontawesome.com/99b107e3e1.js";
        scriptTag.async = true;

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        }
    }, [])
    return (
        <div>
            All
            <div>
                {todos.map((todo) => <TodoItem id={todo.id} title={todo.title} isDone={todo.isDone}/>)}
            </div>
        </div>
    );
};