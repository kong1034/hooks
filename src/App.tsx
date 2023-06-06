import { useContext, useReducer, useState } from 'react';
import './App.css';
import { Contents } from './components/Contents/Contents';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { darkContext } from './context/darkContext';
import { TodoState, listContext } from './context/listContext';
import { reducer } from './reducer/reducer';

const initState: TodoState = {
  todos: [
    { id: 0, text: "", isComplete: false },
  ],
  id: 0
};

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  //reducer의 state, dispatch를 초기값과 함께 정의해준다.
  const [state, dispatch] = useReducer(reducer, initState);

  //context Provider와 props로 받는 value의 값을 정해준다.
  return (
    <div className="App">
      <darkContext.Provider value={{isDark, setIsDark}}>
        <listContext.Provider value={{state, dispatch}}>
          <Header/>
          <Contents/>
          <Footer/>
        </listContext.Provider>
      </darkContext.Provider>
    </div>
  );
}

export default App;
