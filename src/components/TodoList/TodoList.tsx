import React, {FC, useEffect} from 'react';
import {DisplayMode, ITodo} from "../../types/types";
import TodoItem from "../TodoItem/TodoItem";
import classes from "./TodoList.module.scss";

interface TodoListProps {
    todos: ITodo[],
    displayMode: DisplayMode,
}

export const TodoList: FC<TodoListProps> = ({todos, displayMode}) => {
    useEffect(() => {
        const scriptTag = document.createElement('script');

        scriptTag.src = "https://kit.fontawesome.com/99b107e3e1.js";
        scriptTag.async = true;

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        }
    }, []);

    return (
        <div>
            {displayMode === DisplayMode.all &&
              <div className={classes.todoList}>
                <span className={classes.todoList__title}>All</span>
                <div className={classes.todoList__items}>
                    {todos.map((todo) => <TodoItem id={todo.id} title={todo.title} isDone={todo.isDone}/>)}
                </div>
              </div>
            }
            {displayMode === DisplayMode.separately &&
              <div className={classes.todoList_separately}>
                <div className={classes.todoList}>
                  <span className={classes.todoList__title}>Done</span>
                  <div className={classes.todoList__items}>
                      {todos.map((todo) => <TodoItem id={todo.id} title={todo.title} isDone={todo.isDone}/>)}
                  </div>
                </div>
                <div className={classes.todoList}>
                  <span className={classes.todoList__title}>Pending</span>
                  <div className={classes.todoList__items}>
                      {todos.map((todo) => <TodoItem id={todo.id} title={todo.title} isDone={todo.isDone}/>)}
                  </div>
                </div>

              </div>
            }
        </div>
    );
};