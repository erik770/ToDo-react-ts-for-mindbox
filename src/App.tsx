import React, {useEffect, useState} from 'react';
import './App.css';
import {DisplayMode, ITodo, LayoutVariants} from "./types/types";
import {TodoList} from "./components/TodoList/TodoList";
import UserBar from "./components/UserBar/UserBar";
import {IDisplaySettings} from "./types/types";
import {initialTodos} from "./consts/consts";


function App() {
    const [todoArray, setTodoArray] = useState<ITodo[]>(() => {
        const savedTodos = localStorage.getItem("todos");
        if (!savedTodos) {
            return initialTodos;
        }
        return [];
    });

    const [displaySettings, setDisplaySettings] = useState<IDisplaySettings>({
        displayMode: DisplayMode.all,
        layoutVariant: LayoutVariants.vertical
    });

    useEffect(() => {
        const localTodos = localStorage.getItem("todos");
        if (localTodos) {
            setTodoArray(JSON.parse(localTodos));
        }
        const localSettings = localStorage.getItem("todos__settings");
        if (localSettings) {
            setDisplaySettings(JSON.parse(localSettings));
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todoArray));
        window.localStorage.setItem("todos__settings", JSON.stringify(displaySettings));
    }, [todoArray, displaySettings])

    const addTodoToArr = (newTodo: ITodo): void => {
        setTodoArray([...todoArray, newTodo]);
    }
    const deleteTodo = (deletingTodo: ITodo) => {
        setTodoArray(todoArray.filter((currentTodo) => currentTodo.id !== deletingTodo.id))
    }
    const changeTodoDoneStatus = (changingTodo: ITodo) => {
        setTodoArray(todoArray.map(todo =>
            (todo.id === changingTodo.id
                ? {...changingTodo, isDone: !changingTodo.isDone}
                : todo)))
    }


    return (
        <div className='App'>
            <UserBar addTodoToArr={addTodoToArr} displaySettings={displaySettings}
                     setDisplaySettings={setDisplaySettings}/>
            <TodoList todos={todoArray} displaySettings={displaySettings}
                      changeTodoDoneStatus={changeTodoDoneStatus} deleteTodo={deleteTodo}/>
        </div>
    );
}

export default App;
