import { useState } from "react";
import { profileContext } from "./myContext";
import { Profile } from "./profile";

// Using Context
function App() {
    const [name, setName] = useState("john")
    return (
        <div className="App">
            <profileContext.Provider value={{ name, setName }}>
                <Profile />
            </profileContext.Provider>
        </div>
    );
}

export default App;
