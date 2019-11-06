import React from "react";
import "./App.css";
import CardGrid from "./Components/CardGrid"
import DatePicker from "react-date-picker";
import MyApp from "./Components/DatePicker"

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p> */}
      <MyApp />
      <CardGrid />
    </div>
  );
}

export default App;
