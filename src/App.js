import "./App.css";
import React from "react";
import { createExcel } from "./excel";

function App() {
  return (
    <div className="App">
      <button onClick={() => createExcel()}>Export Excel</button>
    </div>
  );
}

export default App;
