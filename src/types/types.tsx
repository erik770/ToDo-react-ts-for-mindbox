export interface ITodo {
    id: number,
    title: string,
    isDone: boolean,
}

export enum LayoutVariants {
    horizontal = 'horizontal',
    vertical = 'vertical',
}

export enum DisplayMode {
    all = 'all',
    separately = 'separately',
}