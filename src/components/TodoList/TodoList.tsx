import React, {FC, useEffect} from 'react';
import {DisplayMode, ITodo, LayoutVariants, IDisplaySettings} from "../../types/types";
import {TodoItem} from "../TodoItem/TodoItem";
import classes from "./TodoList.module.scss";
import {useTodos} from "../../hooks/useTodos";
import {CSSTransition, TransitionGroup} from "react-transition-group";

interface TodoListProps {
    todos: ITodo[],
    displaySettings: IDisplaySettings,
    deleteTodo: (deletingTodo: ITodo) => void
    changeTodoDoneStatus: (changingTodo: ITodo) => void
}

export const TodoList: FC<TodoListProps> = ({todos, displaySettings, deleteTodo, changeTodoDoneStatus}) => {
    useEffect(() => {
        const scriptTag = document.createElement('script');

        scriptTag.src = "https://kit.fontawesome.com/99b107e3e1.js";
        scriptTag.async = true;

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        }
    }, []);


    const isModeSeparately = displaySettings.displayMode === DisplayMode.separately;
    const filteredTodos = useTodos(todos, displaySettings.displayMode);
    const layoutClasses = [];
    if (isModeSeparately) {
        layoutClasses.push(classes.todoList_separately)
        if (displaySettings.layoutVariant === LayoutVariants.horizontal) {
            layoutClasses.push(classes['todoList_separately-horizontal'])
        }
    }

    return (
        <div className={layoutClasses.join(' ')}>
            <div className={classes.todoList}>
                <span className={classes.todoList__title}>{isModeSeparately ? 'Pending' : 'All'}</span>
                <div>
                    <TransitionGroup>
                        {isModeSeparately
                            ? filteredTodos.pendingTodos
                                .map((todo) =>(
                                    <CSSTransition key={todo.id} timeout={500} classNames={'todoItem'}>
                                        <TodoItem
                                            // key={todo.id}
                                            changeTodoDoneStatus={changeTodoDoneStatus}
                                            todoInfo={todo}
                                            deleteTodo={deleteTodo}/>
                                    </CSSTransition>))
                            : filteredTodos.allTodos
                                .map((todo) =>
                                    <CSSTransition key={todo.id} timeout={500} classNames={'todoItem'}>
                                        <TodoItem
                                            // key={todo.id}
                                            changeTodoDoneStatus={changeTodoDoneStatus}
                                            todoInfo={todo}
                                            deleteTodo={deleteTodo}/>
                                    </CSSTransition>)}
                    </TransitionGroup>
                </div>
            </div>
            {isModeSeparately &&
              <div className={classes.todoList}>
                <span className={classes.todoList__title}>Done</span>
                <div>
                  <TransitionGroup>
                      {filteredTodos.doneTodos
                          .map((todo) =>
                              <CSSTransition key={todo.id} timeout={500} classNames={'todoItem'}>
                                  <TodoItem
                                      // key={todo.id}
                                      changeTodoDoneStatus={changeTodoDoneStatus}
                                      todoInfo={todo}
                                      deleteTodo={deleteTodo}/>
                              </CSSTransition>)}
                  </TransitionGroup>
                </div>
              </div>
            }
        </div>
    );
};