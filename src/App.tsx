import { useContext, useState } from 'react';
import './App.css';
import { Contents } from './components/Contents/Contents';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { darkContext } from './context/darkContext';
import { darkType } from './interface/darkType';

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <div className="App">
      <darkContext.Provider value={{isDark, setIsDark}}>
        <Header/>
        <Contents/>
        <Footer/>
      </darkContext.Provider>
    </div>
  );
}

export default App;
