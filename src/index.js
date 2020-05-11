import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// put your reducer here!
const initialReducer = 0;
const myRideInfo = (state  = initialReducer, action )=>{
    if(action.type === 'increment'){
        return state + action.payload;
      }else if(action.type === 'decrement'){
        return state - action.payload;
      }else if(action.type === 'addName'){
          return {...state, addName: action.payload}
      }
      return state;
}
// use reducer in store
const storeInstance = createStore( myRideInfo );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
