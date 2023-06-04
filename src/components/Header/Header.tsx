import { useContext } from 'react';
import { darkContext } from '../../context/darkContext';
import './Header.css'

export const Header = () => {
    const data = useContext(darkContext);

    return <header style={{background: data?.isDark ? 'black': 'white',
    color: data?.isDark ? 'white':'black'}}>
        <h1>HEADER</h1>
    </header>
}