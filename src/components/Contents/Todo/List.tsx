import { useContext } from "react";
import { listContext } from "../../../context/listContext";
import { TodoLi } from "./TodoLi";

export const List = () => {
    const {state, dispatch} = useContext(listContext);
    return <ul>
            {
                
                state.todos.map((todo, i) => (
                    i !== 0 &&
                    <TodoLi id={todo.id} text={todo.text} isComplete={todo.isComplete} key={i}/>
                ))
            }
    </ul>
}