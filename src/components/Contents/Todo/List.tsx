import { useContext, useLayoutEffect } from "react";
import { listContext } from "../../../context/listContext";
import { TodoLi } from "./TodoLi";
import axios from 'axios';

export const List = () => {
    const {state, dispatch} = useContext(listContext);

    useLayoutEffect(() => {
        axios.get('https://my-json-server.typicode.com/kong1034/db/list')
        .then(res => {
            state.todos = res.data;
        })
        .catch(err => {
            console.error(err);
        })
    })

    return <ul>
            {
                
                state.todos.map((todo, i) => (
                    i !== 0 &&
                    <TodoLi id={todo.id} text={todo.text} isComplete={todo.isComplete} key={i}/>
                ))
            }
    </ul>
}