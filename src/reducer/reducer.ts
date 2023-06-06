import { add_action } from "../actions/actions";
import { TodoState } from "../context/listContext";

//dispatch를 통해 전달된 action의 내용을 reducer에서 구체적으로 어떻게 할건지에 대해서 정의한다. 
export const reducer = (state:TodoState, action:add_action):TodoState => {
    switch(action.type) {
        case 'ADD':
            const newTodo = [...state.todos, action.payload.todo];
            return {...state, todos:newTodo, id:state.id+1}
        default:
            return state;
    }
}