import "./App.css";
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person name={"John"} age={23} friends={["Linda", "John", "Helen"]} />
    </div>
  );
}

export default App;
