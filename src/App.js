import React from "react";
import "./App.css";

import * as HomeForm from './static/configurations/home.json';
import Renderer from "./renderer/Renderer";
import ExampleForm1 from "./pages/ExampleForm1";

global.React = React;

function App() {

  return (
    <div className="App">
      <ExampleForm1 />
      <Renderer
        component={"FrContainer"}
        configuration={{}}
        nestedChildren={HomeForm}
      />
    </div>
  );
}

export default App;
