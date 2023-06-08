import { useContext, useState } from "react"
import { ITodo } from "../../../interface/ITodo"
import { listContext } from "../../../context/listContext"

export const TodoLi = (todos:ITodo) => {
    const [isComplete, setIsComplete] = useState(false);
    const {state, dispatch} = useContext(listContext)

    const delTodo = (i:number) => {
        dispatch({type:'DEL', payload:{id:i}});
    }

    const checkComplete = (todo:ITodo) => {
        setIsComplete(!isComplete);
        dispatch({type:'CHE', payload:{todo:todo, id:todo.id, isComplete:todo.isComplete}});
    }

    return <li>
        <input type="checkbox" onChange={() => checkComplete(todos)}/>
        <span style={{opacity: isComplete === true ? "0.3" : "1"}}>{todos.text}</span>
        <button onClick={() => delTodo(todos.id)}>삭제</button>
    </li>
}