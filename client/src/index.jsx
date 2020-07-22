import React from "react";
import ReactDOM from "react-dom";
import GuidePage from "./components/guidePage.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <GuidePage />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
