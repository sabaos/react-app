import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';
import Person from './person';
import {sum, pi, imeAplikacije as mojaVarijabla } from './utility';
import randomstring from 'randomstring'; 

function App() {
  var zbroj = sum(10, 12) * pi;
  var rndStr = randomstring.generate({
    length: 8,
      
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Super fora aplikacija 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
        <p>
        {mojaVarijabla}, {rndStr},  {Person.name}, {zbroj}, Godine: {Person.godine}
      </p>
      </header>
      
    </div>    
  );
}

export default App;
