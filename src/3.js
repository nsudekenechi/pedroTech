import { useState } from 'react';
import './App.css';
function App() {
    const [age, setAge] = useState(0)
    const incrementAge = () => {
        setAge(age + 1);
    }
    const [inputValue, setInputValue] = useState("")
    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }
    const [showText, setShowText] = useState(true)
    const [textColor, setTextColor] = useState("black")
    const [count, setCount] = useState(0)
    return (
        <div className="App">
            <h1>{age}</h1>
            <button onClick={incrementAge}>Increment Age</button>
            <h1>{inputValue}</h1>
            <input type='text' onChange={handleInputValue} />
            {showText && <h1>Hello Kenechi</h1>}
            <button onClick={() => setShowText(!showText)}>Show/Hide</button>
            <h1 style={{ color: textColor }}>Change Color</h1>
            <button onClick={() => setTextColor(textColor == "black" ? "red" : "black")}>Toggle Color</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default App;
