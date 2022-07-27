import React, {useEffect, useState} from 'react';
import './App.css';
import {NewTodoBar} from "./components/NewTodoBar/NewTodoBar";
import {ITodo} from "./types/types";
import {TodoList} from "./components/TodoList/TodoList";

function App() {
    const [todoArray, setTodoArray] = useState<ITodo[]>([]);

    useEffect(() => setTodoArray([
        {
            "id": 1,
            "title": "delectus aut autem",
            "isDone": false
        },
        {
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "isDone": false
        },
        {
            "id": 3,
            "title": "fugiat veniam minus",
            "isDone": false
        }]), []);

    const addTodoToArr = (newTodo: ITodo): void => {
        setTodoArray([...todoArray, newTodo]);
    }

    return (
        <div className="App">
            <NewTodoBar addTodoToArr={addTodoToArr}/>
            <TodoList todos={todoArray}/>
        </div>
    );
}

export default App;
