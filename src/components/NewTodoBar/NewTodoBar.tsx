import React, {FC, useState} from 'react';
import {MyInput} from "../Input/MyInput";
import {MyButton} from "../Button/MyButton";
import {ITodo} from "../../types/types";
import classes from "./NewTodoBar.module.scss";
import {useFocus} from "../../hooks/useFocus";

interface NewTodoBarProps {
    addTodoToArr: (newTodo: ITodo) => void
}

export const NewTodoBtnBar: FC<NewTodoBarProps> = ({addTodoToArr}) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [isActive, setIsActive] = useState(false);
    const [inputRef, setFocus] = useFocus();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsActive(!isActive);
    };
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => setIsActive(!isActive);

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
        <form onSubmit={addNewTodo} className={classes.newTodoBar}>
            <MyButton onClick={handleClick} className={isActive ? classes.newTodoBar__button_active : ''}> <i className="fa-solid fa-plus"></i></MyButton>
            <MyInput ref={inputRef} onBlur={handleBlur} onChange={(e) => setInputValue(e.target.value)} value={inputValue} type='text'
                     placeholder='Enter task name'/>
        </form>
    );
};