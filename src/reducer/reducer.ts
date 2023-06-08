import { actions } from "../actions/actions";
import { TodoState } from "../interface/TodoState";
import { ITodo } from "../interface/ITodo";

//dispatch를 통해 전달된 action의 내용을 reducer에서 구체적으로 어떻게 할건지에 대해서 정의한다. 
export const reducer = (state:TodoState, action:actions):TodoState => {
    let newTodo:ITodo[];
    switch(action.type) {
        case 'ADD':
            newTodo = [...state.todos, action.payload.todo];
            return {...state, todos:newTodo, id:state.id+1};
        case 'DEL':
            newTodo = state.todos.filter(item => {
                return item.id !== action.payload.id
            });
            return {
                ...state,
                todos:newTodo,
            };
        case 'CHE':
            newTodo = state.todos.map(item => {
                if(item.id === action.payload.id) {
                    item.isComplete = action.payload.todo.isComplete
                }
                return item;
            })
            return {...state, todos:newTodo};
        default:
            return state;
    }
}
