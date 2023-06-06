import { useReducer } from "react";
import { Input } from "./Input"
import { List } from "./List"
import './Todo.css';

export const Todo = () => {
    return <>
        <Input/>
        <List/>
    </>
}
