import { Dispatch, createContext } from "react";
import { ITodo } from "../interface/ITodo";
import { ITodoContext } from "../interface/ITodoContext";
import { add_action } from "../actions/actions";

export type TodoState = {
    id:number;
    todos:ITodo[];
}

export interface TodoContext {
    state: TodoState;
    dispatch: Dispatch<add_action>;
}

//context를 처음으로 만들고 초기값을 정의 
export const listContext = createContext({} as ITodoContext)