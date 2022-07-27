import React, {FC} from "react";
import classes from './MySelect.module.scss'
import {DisplayMode, LayoutVariants} from "../../types/types";

interface ISelectOption {
    value: DisplayMode | LayoutVariants,
    name: string,
}

interface MySelectProps{
    options: ISelectOption[],
    defaultValue: string,
    value: DisplayMode | LayoutVariants ,
    onChange: (value: DisplayMode & string ) => void,
}

export const MySelect: FC<MySelectProps> = function ({options, defaultValue, value, onChange}) {
  return (
    <div className={classes.select}>
      <select
        id='standard-select'
        value={value}
        onChange={(event) => onChange(event.target.value as DisplayMode)}
      >
          {defaultValue && <option disabled value="">{defaultValue}</option>}
        {options.map((option) => <option key={option.value} value={option.value}>{option.name}</option>)}
      </select>
      <span className={classes.focus}></span>
    </div>
  )
}