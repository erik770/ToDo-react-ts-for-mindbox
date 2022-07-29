import React, {FC} from 'react';
import {NewTodoBtnBar} from "../NewTodoBar/NewTodoBar";
import {DisplaySettingsBar} from "../DisplaySettings/DisplaySettings";
import {ITodo, IDisplaySettings} from "../../types/types";
import classes from "./UserBar.module.scss";

interface UserBarProps {
    addTodoToArr: (newTodo: ITodo) => void,
    displaySettings: IDisplaySettings,
    setDisplaySettings: (newDisplaySettings: IDisplaySettings) => void,
}

const UserBar: FC<UserBarProps> = ({addTodoToArr, displaySettings, setDisplaySettings}) => {
    return (
        <div className={classes.userBar}>
            <DisplaySettingsBar displaySettings={displaySettings} setDisplaySettings={setDisplaySettings}/>
            <NewTodoBtnBar addTodoToArr={addTodoToArr}/>
        </div>
    );
};

export default UserBar;