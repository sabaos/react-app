import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
//import App from './components/App';
// ovdje radimo switch izmedju singlepage app, konkretno za zadatak Liste ucitavamo App iz AppLista
// 5.13 - Liste
//import App from './components/AppLista';
// 5.14 - Forme 1
//import App from './components/AppForme1';
// 5.15 - Forme 2
//import AppForme2 from './components/AppForme2';

//nasa API import
//import AppAPI from './components/utilities/AppAPI';
//import AppGraphQl from './components/AppGraphQl';
import AppRedux from './components/AppRedux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './components/utilities/ReduxFunkcije';

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<AppForme2/>);
//root.render(<AppAPI/>);
//root.render(<AppGraphQl/>)


const store = createStore(reducer);
root.render(
    <Provider store={store}>
        <AppRedux/>
    </Provider>
)