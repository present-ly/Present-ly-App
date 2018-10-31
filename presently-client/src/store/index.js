import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleWare from 'redux-promise';
import logger from 'redux-logger';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducers,
  {}, composeWithDevTools(
  compose(
    applyMiddleware(thunk, logger, promiseMiddleWare),
  )
));

export default store;
