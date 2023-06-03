import { useToggle } from "./hooks/useToggleToggle";
function App() {
    const [visible, toggleVisible] = useToggle()
    return (
        <div className="App">
            <button onClick={toggleVisible}>{visible ? "Show" : "Hide"}</button>
            <h1>{visible ? "Hidden" : "Shown"}</h1>
        </div>
    );
}

export default App;
