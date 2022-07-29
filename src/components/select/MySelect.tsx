import React, {FC} from "react";
import classes from './MySelect.module.scss'
import {DisplayMode, LayoutVariants} from "../../types/types";

interface ISelectOption {
    value: DisplayMode | LayoutVariants,
    name: string,
    isDisabled?: boolean,
}

interface MySelectProps {
    options: ISelectOption[],
    defaultValue: string,
    value: DisplayMode | LayoutVariants,
    onChange: (value: LayoutVariants | DisplayMode) => void,
}

export const MySelect: FC<MySelectProps> = function ({options, defaultValue, value, onChange}) {
    return (
        <div className={classes.select}>
            <select
                id='standard-select'
                value={value}
                onChange={(event) => onChange(event.target.value as LayoutVariants | DisplayMode)}
            >
                {defaultValue && <option disabled value="">{defaultValue}</option>}
                {options.map((option) => <option disabled={option.isDisabled} key={option.value}
                                                 value={option.value}>{option.name}</option>)}
            </select>
            <span className={classes.focus}></span>
        </div>
    )
}