import { useContext, useRef } from 'react';
import './Input.css';
import { listContext } from '../../../context/listContext';

export const Input = () => {
    //input value 가져오는 코드
    const todoRef = useRef<HTMLInputElement>(null)
    //context API에서 정의한 state, dispatch 가져오기
    const { state, dispatch } = useContext(listContext);

    const addTodo = () => {
        let todo = { id:state.id, text:todoRef.current!.value, isComplete:false}
        //context API로 정의한 dispatch를 이용해 type과 payload 값을 reducer에게 건네준다.
        dispatch({type:'ADD', payload:{todo}});
    }

    return <>
        <input type="text" ref={todoRef}/>
        <button onClick={addTodo}>입력 </button>
            
    </>
}