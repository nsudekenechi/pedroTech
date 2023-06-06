import { DisplayUser } from "./components/DisplayUser";


function App() {

  return (
    <div className="App">
      <DisplayUser name={"Hana"} age={3} friends={["John", "Daniel", "Jude", 9]} />
    </div>
  );
}

export default App;
