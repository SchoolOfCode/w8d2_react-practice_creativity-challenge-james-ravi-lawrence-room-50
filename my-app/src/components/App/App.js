
import {useState} from "react";

import './App.css';


function App() {
  const[count,setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }
  
  return (
      <div>
          <button onClick= {handleClick}>Click Me</button>
          <p>Count: {count}</p>
      </div>
  );
}

export default App;
