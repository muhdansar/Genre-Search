import React from "react";
import Input from "./Components/Input";
function App() {
  return (
    <div className="both-headers">
      <div className="headings">
      <h1>Genre Pioneers</h1>
      </div>
      <div className="headings">
      <h2>search for the pioneers of your favourite genre</h2>
      </div>
      <Input></Input>
    </div>
  );
}

export default App;
