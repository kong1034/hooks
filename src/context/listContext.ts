import { Dispatch, createContext } from "react";
import { ITodo } from "../interface/ITodo";
import { ITodoContext } from "../interface/ITodoContext";
import { actions } from "../actions/actions";

//context를 처음으로 만들고 초기값을 정의 
export const listContext = createContext({} as ITodoContext)