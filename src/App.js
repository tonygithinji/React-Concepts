import React from 'react';
import './App.css';
import { Timer, Dater } from "./react-app/time";
import Form from "./forms/forms";
import Profile from "./context-api/index";
import CounterWrapper from "./exercise/index2";
import RefApp from "./refs/index";
import ModalApp from "./modal/index";
import TodoApp from "./todos-redux/index";

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
