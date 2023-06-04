import { useContext } from 'react';
import './Footer.css';
import { darkContext } from '../../context/darkContext';

export const Footer = () => {
    const data = useContext(darkContext);
    const clickMe = () => {
        data?.setIsDark(!data.isDark);
    }
    return <footer style={{backgroundColor: data?.isDark ? 'black' : 'white', 
    borderTop: data?.isDark ? '1px solid white': '1px solid black'}}>
        <button onClick={clickMe} style={
            {backgroundColor: data?.isDark ? 'black' : 'white', 
            border: data?.isDark ? '1px solid white' : '1px solid black', 
            color: data?.isDark ? 'white': 'black'}
        }>dark</button>
    </footer>
}