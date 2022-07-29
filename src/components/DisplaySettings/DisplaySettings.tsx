import React, {FC} from 'react';
import {MySelect} from "../Select/MySelect";
import {DisplayMode, LayoutVariants, IDisplaySettings} from "../../types/types";
import classes from "./DisplaySettings.module.scss";

interface DisplaySettingsProps {
    displaySettings: IDisplaySettings,
    setDisplaySettings: (newSettings: IDisplaySettings) => void
}

export const DisplaySettingsBar: FC<DisplaySettingsProps> = ({displaySettings, setDisplaySettings}) => {
    const isHorizontalLayoutDisabled = displaySettings.displayMode === DisplayMode.all;
    return (
        <div className={classes.displaySettings}>
            <MySelect options={[
                {name: 'All tasks', value: DisplayMode.all},
                {name: 'Pending', value: DisplayMode.separately}
            ]}
                      defaultValue=''
                      value={displaySettings.displayMode}
                      onChange={(selectedValue) => {
                          setDisplaySettings({
                              layoutVariant: LayoutVariants.vertical,
                              displayMode: selectedValue as DisplayMode,
                          })
                      }}
            />
            <MySelect options={[{name: 'Vertical', value: LayoutVariants.vertical},
                {name: 'Horizontal', value: LayoutVariants.horizontal, isDisabled: isHorizontalLayoutDisabled}]}
                      defaultValue=''
                      value={displaySettings.layoutVariant}
                      onChange={(selectedValue) => {
                          setDisplaySettings({
                              ...displaySettings,
                              layoutVariant: selectedValue as LayoutVariants,
                          })
                      }}
            />
        </div>
    );
};
