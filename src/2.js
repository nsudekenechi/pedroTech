import './App.css';
import css from "./Style.module.css"
function App() {
    const age = 19;
    const isGreen = true;
    const planets = [
        { name: "Mars", isGasPlanet: false },
        { name: "Earth", isGasPlanet: false },
        { name: "Jupiter", isGasPlanet: true },
        { name: "Venus", isGasPlanet: false },
        { name: "Neptune", isGasPlanet: true },
        { name: "Uranus", isGasPlanet: true },
    ]
    return (
        <div className="App">
            <h1 className={css.text}>hiiii</h1>
            {age >= 18 ? <h1>You're 18</h1> : <h1>Not 18</h1>}
            <h1 style={{ color: isGreen ? "green" : "red" }}>isGreen</h1>
            {planets.map((item, index) =>
                item.isGasPlanet && <h1>{item.name}</h1>
            )}
        </div>
    );
}

export default App;
