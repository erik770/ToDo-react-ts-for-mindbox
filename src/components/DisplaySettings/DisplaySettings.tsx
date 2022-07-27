import React, {FC} from 'react';
import {MySelect} from "../select/MySelect";
import {DisplayMode, LayoutVariants} from "../../types/types";
import {IDisplaySettings} from "../../App";

interface DisplaySettingsProps {
    displaySettings: IDisplaySettings,
    setDisplaySettings: (newSettings: IDisplaySettings) => void
}

export const DisplaySettingsBar: FC<DisplaySettingsProps> = ({displaySettings, setDisplaySettings}) => {
    return (
        <div>
            <MySelect options={[
                    {name: 'Show all together', value: DisplayMode.all},
                    {name: 'Show done separately', value: DisplayMode.separately}
                ]}
                      defaultValue=''
                      value={displaySettings.displayMode}
                      onChange={(selectedValue) => {
                          setDisplaySettings({
                              ...displaySettings,
                              displayMode: selectedValue as DisplayMode,
                          })
                      }}
            />
            <MySelect options={[{name: 'Vertical', value: LayoutVariants.vertical},
                {name: 'Horizontal', value: LayoutVariants.horizontal}]}
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
