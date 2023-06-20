import { useState } from "react";
import { Text } from "./Text";
function App() {
    const [show, setShow] = useState(false)
    return (
        <div className="App">
            <button onClick={setShow(!show)}>Show</button>
            {show && <Text />}
        </div>
    );
}

export default App;
