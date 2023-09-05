import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import reducer from './reducer';
import { Provider } from 'react-redux';

import App from './conponents/App';

const store = createStore(reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


  ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/> 
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );



// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }







