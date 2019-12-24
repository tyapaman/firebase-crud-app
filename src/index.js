import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import reducer from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
  <Switch>
    <Route exact path="/events/new" component={EventsNew}></Route>
    <Route exact path="/" component={EventsIndex}></Route>
  </Switch>
  </BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
