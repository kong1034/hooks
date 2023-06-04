import { useContext } from 'react';
import './Contents.css';
import { darkContext } from '../../context/darkContext';

export const Contents = () => {
    const data = useContext(darkContext);

    return <section style={{background: data?.isDark ? 'black': 'white',
    color: data?.isDark ? 'white' : 'black',
    borderTop: data?.isDark ? '1px solid white': '1px solid black'}}>
        콘텐츠
    </section>
}