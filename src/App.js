import React from "react";
import "./App.css";

import { FormSubmitContext } from './common/contexts';
import { FrGrid, FrGridColumn } from "./componentLibrary";
import HomeForm from "./static/configurations/home.json";
import Renderer from "./renderer/Renderer";
import ExampleForm1 from "./pages/ExampleForm1";

global.React = React;

function App() {
  return (
    <FrGrid padded stackable>
      <FrGridColumn width={8}>
        <FormSubmitContext.Provider value={(e) => console.log('Clicking traditional submit', e.target)}>
          <ExampleForm1 />
        </FormSubmitContext.Provider>
      </FrGridColumn>
      <FrGridColumn width={8}>
        <FormSubmitContext.Provider value={(e) => console.log('Clicking configurable submit', e.target)}>
          <Renderer
            component={"FrContainer"}
            configuration={{}}
            nestedChildren={HomeForm.pageRender}
          />
        </FormSubmitContext.Provider>
      </FrGridColumn>
    </FrGrid>
  );
}

export default App;
