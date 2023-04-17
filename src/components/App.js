import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';
//import { mojaVarijabla } from './utilities';
//import Person from './utilities/person';
//import {sum, pi, imeAplikacije as mojaVarijabla } from './utilities/utility';
import randomstring from 'randomstring'; 
import {mojaVarijabla, num1, num2, pi, Osoba, sum, } from './utilities'

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
        {mojaVarijabla}, {rndStr},  {Osoba.name}, {zbroj}, Godine: {Osoba.godine}
      </p>
      </header>
      
    </div>    
  );
}

export default App;
