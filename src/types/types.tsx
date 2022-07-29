export interface ITodo {
    id: number,
    title: string,
    isDone: boolean,
}

export interface IDisplaySettings {
    displayMode: DisplayMode,
    layoutVariant: LayoutVariants,
}

export enum LayoutVariants {
    horizontal = 'horizontal',
    vertical = 'vertical',
}

export enum DisplayMode {
    all = 'all',
    separately = 'separately',
}

export interface ISelectOption {
    value: DisplayMode | LayoutVariants,
    name: string,
    isDisabled?: boolean,
}