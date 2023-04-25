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

//5.7 - import
import React from 'react';
import KorisnikKlasa from './KorisnikKlasa';
import KorisnikFunkcija from './KorisnikFunkcija';
//5.7 
// - funkcija
function WelcomeFunkcija(){
  return (
    <h2>
      Welcome! Komponenta definirana funkcijom!
    </h2>
  )
}
// - klasa

// class WellcomeKlasa extends React.Component{
//   render(){
//     return(
//       <h1> Welcome! komponenta definirana klasom.</h1>
//     );
//   }
// }


const korisnici = [
  {ime: "Marko", godine: 22},
  {ime: "Katarina", godine: 21},
  {ime: "Nataša", godine: 20}
]

class App extends React.Component {
  
  
  render(){

  var prva ="PRVI TEKST";
  var druga= "DRUGI TEXT"
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
      
      <WelcomeFunkcija/>
      {/* <WellcomeKlasa/> */}
      <KorisnikKlasa ime={korisnici[0].ime} godine={korisnici[0].godine}/>
      <KorisnikKlasa ime={korisnici[1].ime} godine={korisnici[1].godine}/>
      
      <KorisnikFunkcija ime={korisnici[2].ime} godine={korisnici[2].godine}/>
    </div>);
 } 
}

export default App;
