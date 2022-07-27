import React, {FC, useState} from 'react';
import {MyInput} from "../input/MyInput";
import {MyButton} from "../button/MyButton";
import {ITodo} from "../../types/types";

interface NewTodoBarProps {
    addTodoToArr: (newTodo: ITodo) => void
}

export const NewTodoBar: FC<NewTodoBarProps> = ({addTodoToArr}) => {
    const [inputValue, setInputValue] = useState<string>('')

    const addNewTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue) {
            const newTodo: ITodo = {
                id: Date.now(),
                title: inputValue,
                isDone: false,
            }
            addTodoToArr(newTodo);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={addNewTodo}>
            <MyInput onChange={(e) => setInputValue(e.target.value)} value={inputValue} type='text'
                     placeholder='Enter task name'/>
            <MyButton> Add task </MyButton>
        </form>
    );
};