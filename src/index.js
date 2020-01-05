import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import reducer from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {composeWithDevTools} from 'redux-devtools-extension';

import './index.css';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const enhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(thunk)):applyMiddleware(thunk);

//storeの作成
const store = createStore(reducer,enhancer);

ReactDOM.render(
<MuiThemeProvider>
{/* 全てのコンポーネントでstoreを使用できるようにする */}
<Provider store={store}>
  <BrowserRouter>
  <Switch>
    <Route path="/events/new" component={EventsNew}></Route>
    {/* idは変数なので:をつける */}
    <Route path="/events/:id" component={EventsShow}></Route>
    <Route exact path="/" component={EventsIndex}></Route>
    <Route exact path="/events" component={EventsIndex}></Route>
  </Switch>
  </BrowserRouter>
</Provider>
</MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
