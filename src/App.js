import React from 'react';
import './App.css';
import FrForm from './componentLibrary/FrForm';
import FrButton from './componentLibrary/FrButton';
import FrFormInput from './componentLibrary/FrFormInput';

function App() {
  return (
    <div className="App">
        <FrForm>
        <FrButton>Hello</FrButton>
        <FrFormInput size={'large'} label={"My label"} handleChange={console.log} handleBlur={console.log}/>
        </FrForm>

    </div>
  );
}

export default App;
