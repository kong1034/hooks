import { useContext } from 'react';
import './Contents.css';
import { darkContext } from '../../context/darkContext';
import { Todo } from './Todo/Todo';

export const Contents = () => {
    const data = useContext(darkContext);

    return <section style={{background: data?.isDark ? 'black': 'white',
    color: data?.isDark ? 'white' : 'black',
    borderTop: data?.isDark ? '1px solid white': '1px solid black'}}>
        <Todo/>
    </section>
}