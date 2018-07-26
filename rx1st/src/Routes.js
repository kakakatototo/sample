import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { App } from './container';

const store = createStore(Reducers);

export class Routes extends React.Component {
  render(){
    return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
    )
  }
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={App}/>
    </Switch>
  </main>
)
export default Routes;
