
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {

  const [count, setCount] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} time</p>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default App
