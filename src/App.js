import React, { Component } from "react";
import "./App.css";
// import TreeInput from "./components/TreeInput";
import TreeViz from "./components/TreeViz";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <TreeInput /> */}
        <TreeViz width={1000} height={600} />
      </div>
    );
  }
}

export default App;
