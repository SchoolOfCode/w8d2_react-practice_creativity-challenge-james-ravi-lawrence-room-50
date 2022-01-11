
import {useState, useEffect} from "react";
import Button from "../buttons";
import './App.css';


function App() {
  const[count,setCount] = useState(0);

  useEffect(()=>{
    document.body.style = "background-color: lightblue";
    console.log("Changing background colour")
  }, [])

  useEffect(()=>{
    document.title=`Counter is ${count}`
    console.log("Changing title")
  }, [count])

  useEffect(()=>{
    document.body.style = `font-size: ${count}px; background-color: lightblue;`
})

  function increaseCount(){
    setCount(count + 1);
  }

  function decreaseCount(){
    setCount(count - 1);
  }
  
  return (
      <div>
          <Button handleClick={increaseCount} text="Increase"/>
          <Button handleClick={decreaseCount} text="Decrease"/>
          <p>Count: {count}</p>
      </div>
  );
}

export default App;
