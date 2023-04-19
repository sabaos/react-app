import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';
//import { mojaVarijabla } from './utilities';
//import Person from './utilities/person';
//import {sum, pi, imeAplikacije as mojaVarijabla } from './utilities/utility';
import randomstring from 'randomstring'; 
import {mojaVarijabla, num1, num2, pi, Osoba, sum, oduzmi, } from './utilities'

// 5.5
import {Komponenta1} from './Komponenta1';
import {Komponenta2} from './Komponenta2';
import Komponenta3 from './Komponenta3';

//5.6
import {GlavnaKomponenta} from './GlavnaKomponenta'

var prva ="PRVI TEKST";
var druga= "DRUGI TEXT"

function App() {
  var zbroj = sum(10, 12) * pi;

  var rndStr = randomstring.generate({
    length: 8,
      
  });
  var od = oduzmi (num1, num2)
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
        {mojaVarijabla}, {rndStr},  {Osoba.name}, <br />{zbroj}, Godine: {Osoba.godine}
        <br />
        <br />
        oduzimanje {od}
      </p>
      </header>
      <p>komponenta 1</p>
      <Komponenta1/><br/>
      <Komponenta2 podatak1={prva}/>
      <Komponenta3 podatak1={prva} podatak2={druga}/>

      <GlavnaKomponenta/>
      
    </div>    
  );
}

export default App;
