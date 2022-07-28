import {DisplayMode, ITodo} from "../types/types";
import {useMemo} from "react";


export const useTodos = (allTodos: ITodo[], displayMode: DisplayMode): { allTodos: ITodo[], doneTodos: ITodo[], pendingTodos: ITodo[] } => {
    return useMemo(() => {
        const doneTodos: ITodo[] = [];
        const pendingTodos: ITodo[] = [];
        if (displayMode === DisplayMode.separately) {
            allTodos.forEach((todo) => todo.isDone ? doneTodos.push(todo) : pendingTodos.push(todo));
            return {
                allTodos,
                doneTodos,
                pendingTodos,
            }
        }
        return {
            allTodos,
            doneTodos,
            pendingTodos
        }
    }, [allTodos, displayMode]);
}