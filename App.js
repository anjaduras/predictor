import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const baseURL = "https://api.agify.io/?name=";
  const [data, setData] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  function prediction() {
    const apiUrl = baseURL + name;

    axios.get(apiUrl).then((response) => {
      setData(response.data);
    });
  }

   const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      prediction();
    }
  };

  return (
    <div className="App">
      <input
        placeholder="Please enter a name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={prediction} >Predict age</button>
      <h1>Name: {data.name}</h1>
      <h1>Predicted Age: {data.age}</h1>
      <h1>Count: {data.count}</h1>
    </div>
  );
}

export default App;
