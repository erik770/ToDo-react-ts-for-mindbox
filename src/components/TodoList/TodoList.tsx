import React, {FC, useEffect} from 'react';
import {DisplayMode, ITodo} from "../../types/types";
import {TodoItem} from "../TodoItem/TodoItem";
import classes from "./TodoList.module.scss";
import {useTodos} from "../../hooks/useTodos";

interface TodoListProps {
    todos: ITodo[],
    displayMode: DisplayMode,
    deleteTodo: (deletingTodo: ITodo) => void
    changeTodoDoneStatus: (changingTodo: ITodo) => void
}

export const TodoList: FC<TodoListProps> = ({todos, displayMode, deleteTodo, changeTodoDoneStatus}) => {
    useEffect(() => {
        const scriptTag = document.createElement('script');

        scriptTag.src = "https://kit.fontawesome.com/99b107e3e1.js";
        scriptTag.async = true;

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        }
    }, []);


    const isModeSeparately = displayMode === DisplayMode.separately;
    const filteredTodos = useTodos(todos, displayMode);

    return (
        <div className={isModeSeparately ? classes.todoList_separately : ''}>
            <div className={classes.todoList}>
                <span className={classes.todoList__title}>{isModeSeparately ? 'Pending' : 'All'}</span>
                <div className={classes.todoList__items}>
                    {isModeSeparately
                        ? filteredTodos.pendingTodos
                            .map((todo) =>
                                <TodoItem
                                    key={todo.id}
                                    changeTodoDoneStatus={changeTodoDoneStatus}
                                    todoInfo={todo}
                                    deleteTodo={deleteTodo}/>)
                        : filteredTodos.allTodos
                            .map((todo) =>
                                <TodoItem
                                    key={todo.id}
                                    changeTodoDoneStatus={changeTodoDoneStatus}
                                    todoInfo={todo}
                                    deleteTodo={deleteTodo}/>)}
                </div>
            </div>
            {isModeSeparately &&
              <div className={classes.todoList}>
                <span className={classes.todoList__title}>Done</span>
                <div className={classes.todoList__items}>
                    {filteredTodos.doneTodos
                        .map((todo) =>
                            <TodoItem
                                key={todo.id}
                                changeTodoDoneStatus={changeTodoDoneStatus}
                                todoInfo={todo}
                                deleteTodo={deleteTodo}/>)}
                </div>
              </div>
            }
        </div>

    );
};