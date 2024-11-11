import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');
  
  
  const handleClick = (value) => {
    if (value === '=') {
      if(expression === ''){
        setResult('Error');
        return;
      };
      setResult(eval(expression));
      return;
    } else if (value === 'C') {
      setExpression('');
      setResult('');
      return;
    }
    setExpression(expression + value);
  }
  return (
    <div className="App">
    <h1>React Calculator</h1>
    <input type="text" value={expression} onChange={(e) => setExpression(e.target.value)} />
    <p className="result-text">{result}</p>
    <div className="button-container">
      <button className="button" onClick={()=>{handleClick('7')}} >7</button>
      <button className="button" onClick={()=>{handleClick('8')}} >8</button>
      <button className="button" onClick={()=>{handleClick('9')}} >9</button>
      <button className="button" onClick={()=>{handleClick('+')}} >+</button>
      <button className="button" onClick={()=>{handleClick('4')}} >4</button>
      <button className="button" onClick={()=>{handleClick('5')}} >5</button>
      <button className="button" onClick={()=>{handleClick('6')}} >6</button>
      <button className="button" onClick={()=>{handleClick('-')}} >-</button>
      <button className="button" onClick={()=>{handleClick('1')}} >1</button>
      <button className="button" onClick={()=>{handleClick('2')}} >2</button>
      <button className="button" onClick={()=>{handleClick('3')}} >3</button>
      <button className="button" onClick={()=>{handleClick('*')}} >*</button>
      <button className="button" onClick={()=>{handleClick('C')}} >C</button>
      <button className="button" onClick={()=>{handleClick('0')}} >0</button>
      <button className="button" onClick={()=>{handleClick('=')}} >=</button>
      <button className="button" onClick={()=>{handleClick("/")}} >/</button>
    </div>
    </div>
  );
}

export default App;
