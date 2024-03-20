import { useState } from 'react';
import './App.css';

function App() {
  let [color, setColor] = useState("black");
  function funcchange(e){
    setColor(e.target.value)
  }
  return (
    <div className="App">
      <div style={{
        width:1366,
        height:645,
        border:1,
        backgroundColor:color,
        borderStyle:'dotted'
      }}>
      <input type='color' value={color} onChange={funcchange}></input>
      </div>
    </div>
  );
}

export default App;
