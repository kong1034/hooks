import { useContext, useReducer, useState } from "react";
import { ITodo } from "../../../interface/ITodo"
import { TodoState, listContext } from "../../../context/listContext";
import { reducer } from "../../../reducer/reducer";

const initState: TodoState = {
    id:0,
    todos: [
      { id: 1, text: "", isComplete: false },
    ]
};

export const List = () => {
    const {state, dispatch} = useContext(listContext);
    const todos = state.todos;

    return <ul>
            {
                todos.map((todo, i) => (
                    i !== 0 &&
                    <li key={i}>{todo.text}</li>
                ))
            }
    </ul>
}