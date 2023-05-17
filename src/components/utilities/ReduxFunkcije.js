const ADD_COUNT = 'ADD_COUNT';
const SUBSTRACT_COUNT = 'SUBSTRACT_COUNT';
const SET_COUNT = 'SET_COUNT';

export function dodajNaBrojac(broj=1){
    return{ type: ADD_COUNT, broj};
}

export function oduzmiSaBrojaca(broj=1){
    return{ type: SUBSTRACT_COUNT, broj};
}

export function setirajBrojac(brojac=0){
    return {type: SET_COUNT, brojac};
}

export function reducer(state =0, action){
    switch (action.type){
        case ADD_COUNT:
            return state + action.broj;
        case SUBSTRACT_COUNT:
            return state - action.broj;
        case SET_COUNT:
            return action.brojac;
        default:
            return state;
    }
}