
import {useState} from "react";
import Button from "../buttons";
import './App.css';


function App() {
  const[count,setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }
  
  return (
      <div>
          <Button handleClick ={handleClick}/>
          <p>Count: {count}</p>
      </div>
  );
}

export default App;
