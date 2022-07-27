import React, {useEffect, useState} from 'react';
import './App.css';
import {NewTodoBar} from "./components/NewTodoBar/NewTodoBar";
import {DisplayMode, ITodo, LayoutVariants} from "./types/types";
import {TodoList} from "./components/TodoList/TodoList";
import Layout from "./components/Layout/Layout";
import {DisplaySettingsBar} from "./components/DisplaySettings/DisplaySettings";


export interface IDisplaySettings {
    displayMode: DisplayMode,
    layoutVariant: LayoutVariants,
}

function App() {
    const [todoArray, setTodoArray] = useState<ITodo[]>([]);
    const [displaySettings, setDisplaySettings] = useState<IDisplaySettings>({
        displayMode: DisplayMode.all,
        layoutVariant: LayoutVariants.vertical
    });

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
            "isDone": true
        }]), []);

    const addTodoToArr = (newTodo: ITodo): void => {
        setTodoArray([...todoArray, newTodo]);
    }

    return (
        <Layout layoutType={LayoutVariants.horizontal}>
            <NewTodoBar addTodoToArr={addTodoToArr}/>
            <DisplaySettingsBar displaySettings={displaySettings} setDisplaySettings={setDisplaySettings} />
            <TodoList todos={todoArray} displayMode={displaySettings.displayMode}/>
        </Layout>
    );
}

export default App;
