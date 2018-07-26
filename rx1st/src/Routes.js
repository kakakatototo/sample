import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './reducers';
import { BrowserRouter, Route } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './container/App';

const store = createStore(Reducers);

export class Routes extends Component {
  render(){
    return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={App}/>
      </BrowserRouter>
    </Provider>
    )
  }
}
  
 export default Routes;
