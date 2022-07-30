import React, {FC} from "react";
import classes from './MySelect.module.scss'
import {DisplayMode, ISelectOption, LayoutVariants} from "../../types/types";

interface MySelectProps {
    options: ISelectOption[],
    defaultValue: string,
    value: DisplayMode | LayoutVariants,
    onChange: (value: LayoutVariants | DisplayMode) => void,
    className?: string,
}

export const MySelect: FC<MySelectProps> = function ({className, options, defaultValue, value, onChange}) {
    return (
        <div className={[classes.select, className].join(' ')}>
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