import React from 'react'
import {useState} from 'react'
import Estatus from "./components/Estatus"
import Posteos from './components/Posteos'

function App() {

  const[total , setTotal]=useState(0)

  const sumar=()=>{
    setTotal(total+1)
  }

  return (
    <div className="App">
      <Estatus total={total} />
      <Posteos sumar={sumar} />
    </div>
  );
}

export default App;
