import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");
  const fetchData = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      console.log()
      setData(res.data.fact)
    })
  }
  const [text, setText] = useState("")
  const [agify, setAgify] = useState(null);
  const handleAgify = () => {
    axios.get(`https://api.agify.io/?name=${text}`).then(res => setAgify(res.data))
  }
  const [excuse, setExcuse] = useState("")
  const getExcuse = (excuse) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then(res => {
      setExcuse(res.data[0])
    })
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="App">
      <div>
        <button onClick={fetchData}>Generate</button>
        <h1>{data}</h1>
      </div>

      <div>
        <input type="text" onChange={(event) => setText(event.target.value)} />
        <button onClick={handleAgify}>Get Details</button>
        <h1>Name: {agify?.name}</h1>
        <h1>Age: {agify?.age}</h1>
      </div>

      <div>
        <button onClick={() => getExcuse("party")}>Party</button>
        <button onClick={() => getExcuse("family")}>Family</button>
        <button onClick={() => getExcuse("office")}>Office</button>
        <h1>{excuse.excuse}</h1>
      </div>
    </div>
  );
}

export default App;
