import React, {FC} from 'react';
import {MySelect} from "../select/MySelect";
import {DisplayMode} from "../../types/types";
import {IDisplaySettings} from "../../App";

interface DisplaySettingsProps {
    displaySettings: IDisplaySettings,
    setDisplaySettings: (newSettings: IDisplaySettings) => void
}

export const DisplaySettingsBar: FC<DisplaySettingsProps> = ({displaySettings, setDisplaySettings}) => {
    return (
        <div>
            <MySelect options={[{name: 'Show all together', value: DisplayMode.all},
                {name: 'Show done separately', value: DisplayMode.separately}]}
                      defaultValue=''
                      value={displaySettings.displayMode}
                      onChange={(selectedValue) => {
                          setDisplaySettings({
                              ...displaySettings,
                              displayMode: selectedValue,
                          })
                      }}/>
        </div>
    );
};
