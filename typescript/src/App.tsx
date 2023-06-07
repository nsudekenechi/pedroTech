import "./App.css";
import { Person, Country } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name={"John"}
        age={23}
        friends={["Linda", "John", "Helen"]}
        country={Country.London}
      />
    </div>
  );
}

export default App;
